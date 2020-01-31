/* eslint-disable vue/valid-v-else */
<template>
  <div>
    <div v-if="!item.hidden">
      <template v-if="hasOneShowingChild(item.children, item)">
        <div>item.hidden</div>
      </template>

      <el-submenu v-else ref="subMenu" >
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-submenu>
    </div>

    <!-- <el-menu-item index="/home" route="/home">
      <i class="el-icon-house"></i>
      <span>首页</span>
    </el-menu-item>
    <el-submenu>
      <template slot="title">
        <i class="el-icon-edit"></i>
        <span>作业</span>
      </template>
      <el-menu-item index="/work/active" route="/work/active">
        <i class="el-icon-edit-outline"></i>
        进行中
      </el-menu-item>
      <el-menu-item index="/work/all" route="/work/all">
        <i class="el-icon-takeaway-box"></i>
        全部
      </el-menu-item>
      <el-menu-item index="/work/post" route="/work/post">
        <i class="el-icon-document-add"></i>
        发布
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="/user" route="/user">
      <i class="el-icon-set-up"></i>
      <span>我的</span>
    </el-menu-item>
    <el-menu-item index="/log" route="/log">
      <i class="el-icon-document"></i>
      <span>日志</span>
    </el-menu-item> -->
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'SidebarItem',
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
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
    }
  }
}
</script>

<style></style>
