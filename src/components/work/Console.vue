<template>
  <div>
    <el-form :model="queryForm" :inline="true">
      <el-form-item>
        <el-input v-model="queryForm.name" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="queryForm.courseName" placeholder="科目">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
      <el-button
        type="primary"
        :loading="inLoading"
        @click="fetchWork"
        icon="el-icon-refresh"
        ref="refreshBtn"
        >手动更新</el-button
      >
      <el-button
        type="success"
        v-if="premission"
        @click="dialogVisible = true"
        icon="el-icon-plus"
        >添加</el-button
      >
    </el-form>
    <create-dialog :show="dialogVisible" @close="dialogVisible = false" />
  </div>
</template>

<script>
import CreateDialog from '@/components/work/CreateDialog'
export default {
  name: 'Console',
  data () {
    return {
      dialogVisible: false,
      addVisible: false,
      inLoading: false,
      queryForm: {
        name: '',
        courseName: ''
      }
    }
  },
  components: {
    CreateDialog
  },
  computed: {
    premission () {
      const roles = ['admin', 'editor']
      var flag = false
      roles.forEach(roles => {
        if (this.$store.getters.roles.includes(roles)) {
          flag = true
        }
      })

      return flag
    }
  },
  methods: {
    fetchWork () {
      this.inLoading = true
      this.$store.dispatch('work/info').then(() => {
        this.inLoading = false
        this.$message({
          message: '更新成功',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style></style>
