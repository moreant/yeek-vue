/* eslint-disable vue/valid-v-else */
<template>
  <div>
    <div v-if="!item.hidden">
      <template v-if="hasOneChild(item.children, item)">
        <sidebar-link
          v-if="onlyOneChild.meta"
          :to="resolvePath(onlyOneChild.path)"
        >
          <el-menu-item :index="resolvePath(onlyOneChild.path)">
            <i :class="onlyOneChild.meta.icon"></i>
            <span slot="title"> {{ onlyOneChild.meta.title }}</span>
          </el-menu-item>
        </sidebar-link>
      </template>

      <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title"> {{ item.meta.title }}</span>
        </template>

        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child.path)"
        />
      </el-submenu>
    </div>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import SidebarLink from './SidebarLink'

export default {
  name: 'SidebarItem',
  components: {
    SidebarLink
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  data () {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneChild (children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath (routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style></style>
