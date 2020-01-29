<template>
  <div>
    <el-menu
      default-active="2"
      class="sidebar"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item>
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>作业</span>
        </template>
        <el-menu-item index="">
          <i class="el-icon-edit-outline"></i>
          进行中
        </el-menu-item>
        <el-menu-item index="">
          <i class="el-icon-takeaway-box"></i>
          全部
        </el-menu-item>
        <el-menu-item index="">
          <i class="el-icon-document-add"></i>
          发布
        </el-menu-item>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-set-up"></i>
        <span>管理</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-document"></i>
        <span>日志</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
