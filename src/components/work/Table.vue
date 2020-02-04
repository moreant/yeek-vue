<template>
  <el-table :data="workList">
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column prop="courseName" label="科目" ></el-table-column>
    <el-table-column prop="start" label="开始日期"  ></el-table-column>
    <el-table-column prop="end" label="截止日期"  ></el-table-column>
    <el-table-column prop="remark" label="备注"></el-table-column>
    <el-table-column prop="number" label="收集情况" >
      <template slot-scope="scope">
        <el-progress
          :percentage="percentage(56, scope.row.number)"
          :stroke-width="18"
          :text-inside="true"
        ></el-progress>
        {{ scope.row.number }}/56
      </template>
    </el-table-column>
    <el-table-column label="操作" width="260px">
      <template slot-scope="scope">
        <el-button-group>
          <el-button
            v-if="scope.row.file"
            @click="$emit('file-dialog', scope.row.file)"
            type="primary"
            size="mini"
            :plain="scope.row.file.length == 0"
          >
            文件</el-button
          >
          <el-tooltip placement="top">
            <div slot="content">
              id：{{ scope.row.id }}<br />发布者：<br />发布时间：
            </div>
            <el-button size="mini" icon="el-icon-more"></el-button>
          </el-tooltip>
        </el-button-group>
        <el-button-group style="margin-left: 10px">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-download"
            @click="downloadItem(scope.row.id)"
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="delItem(scope.row.id)"
          ></el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      itemWidth: '130px'
    }
  },
  computed: {
    workList () {
      return this.$store.getters.workList
    }
  },
  methods: {
    percentage (denominator, numerator) {
      return Math.round((numerator / denominator) * 100)
    },
    downloadItem (id) {
      alert(`下载${id}`)
    },
    delItem (id) {
      this.$confirm('确定删除这项作业吗', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          alert(`执行删除${id}`)
        })
        .catch(() => {})
    }
  }
}
</script>

<style></style>
