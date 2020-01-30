<template>
  <div>
    <el-container>
      <el-header>
        <navbar />
      </el-header>
      <el-container>
        <el-aside>
          <sidebar />
        </el-aside>
        <el-main>
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import { AppMain, Navbar, Sidebar } from './components'

export default {
  name: 'layout',
  components: {
    AppMain,
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #409eff;
}
</style>
