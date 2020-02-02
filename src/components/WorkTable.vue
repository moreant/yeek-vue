<template>
  <div>
    <el-table :data="workList">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="courseName" label="科目"></el-table-column>
      <el-table-column prop="start" label="开始日期"></el-table-column>
      <el-table-column prop="end" label="截止日期"></el-table-column>
      <el-table-column prop="end" label="收集情况">
        <el-progress :percentage="46"></el-progress>
      </el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" size="mini">上传</el-button>
        <el-button size="mini">下载</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchWork } from '@/api/work'

export default {
  name: 'WorkActive',
  data () {
    return {
      workList: []
    }
  },
  created () {
    this.fetchWork()
  },
  computed: {
    percentageNumber (percentage) {
      return Math.round((percentage / 56) * 100)
    }
  },
  methods: {
    fetchWork () {
      fetchWork().then(response => {
        this.workList = response.data
      })
    }
  }
}
</script>

<style>
</style>
