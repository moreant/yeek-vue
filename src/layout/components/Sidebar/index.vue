<template>
  <div>
    <el-menu router default-active="$route.path">
      <el-menu-item index="1" route="/home">
        <i class="el-icon-house"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>作业</span>
        </template>
        <el-menu-item index="2-1" route="/work/active">
          <i class="el-icon-edit-outline"></i>
          进行中
        </el-menu-item>
        <el-menu-item index="2-2" route="/work/all">
          <i class="el-icon-takeaway-box"></i>
          全部
        </el-menu-item>
        <el-menu-item index="2-3" route="/work/post">
          <i class="el-icon-document-add"></i>
          发布
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-set-up"></i>
        <span>管理</span>
      </el-menu-item>
      <el-menu-item index="4" route="/log">
        <i class="el-icon-document"></i>
        <span>日志</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
