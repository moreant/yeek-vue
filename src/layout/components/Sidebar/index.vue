<template>
  <div>
    <!-- default-active 加冒号是传值到子组件中，需要index配合 -->
    <el-menu
      :default-active="$route.path"
      :collapse="false"
      :default-openeds="openedIndex"
    >
      <sidebar-item
        v-for="route in permission_routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  data () {
    return {
      openedIndex: ['/work']
    }
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters(['permission_routes'])
  }
}
</script>

<style></style>
