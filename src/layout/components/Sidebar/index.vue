<template>
  <div>
    <!-- default-active 加冒号是传值到子组件中，需要index配合 -->
    <el-menu router :default-active="$route.path">
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
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters(['permission_routes'])
  }
}
</script>

<style></style>
