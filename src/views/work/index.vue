<template>
  <div>
    <el-table :data="workList">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="courseName" label="科目"></el-table-column>
      <el-table-column prop="start" label="开始日期"></el-table-column>
      <el-table-column prop="end" label="截止日期"></el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        min-width="200px"
      ></el-table-column>
      <el-table-column prop="number" label="收集情况">
        <template slot-scope="scope">
          <el-progress
            :percentage="percentage(56, scope.row.number)"
            :stroke-width="18"
            :format="format"
            :text-inside="true"
          ></el-progress>
        </template>
      </el-table-column>
      <el-table-column prop="file" label="文件">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.file"
            @click="handleUpload"
            type="primary"
            size="mini"
            :plain="scope.row.file.name === '' ? true : false"
            >管理</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="文件" :visible.sync="uploadFormVisible">
      <h3>将要 上传/下载 科目 - 课堂练习 作业</h3>
      <el-upload
        :action="actionLink()"
        ref="upload"
        :on-exceed="handleExceed"
        :on-success="handleSuccess"
        :auto-upload="false"
        :limit="1"
      >
        <el-button slot="trigger" type="primary">
          <i class="el-icon-folder-opened"></i>
          选择文件
        </el-button>

        <el-button
          type="primary"
          style="margin-left: 10px;"
          @click="submitUpload"
        >
          <i class="el-icon-upload2"></i>
          上传
        </el-button>
        <el-button type="primary" @click="downloadFile">
          <i class="el-icon-download"></i>
          下载
        </el-button>
      </el-upload>
      <span slot="footer">
        <el-button @click="uploadFormVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'WorkIndex',
  data () {
    return {
      uploadFormVisible: false,
      workList: [
        {
          name: '课堂练习',
          courseName: '科目',
          start: '开始日期',
          end: '截止日期',
          remark: '请打包上交sec文件中的文件，格式为zip',
          number: 45,
          file: {
            name: '文件',
            size: '',
            link: ''
          }
        },
        {
          name: '课堂练习',
          courseName: '科目',
          star: '开始日期',
          end: '截止日期',
          number: 6,
          file: {
            name: '文件',
            size: '',
            link: ''
          }
        },
        {
          name: '课堂练习',
          courseName: '科目',
          star: '开始日期',
          end: '截止日期',
          number: 45
        },
        {
          name: '课堂练习',
          courseName: '科目',
          star: '开始日期',
          end: '截止日期',
          number: 55,
          file: {
            name: '',
            size: '',
            link: ''
          }
        }
      ]
    }
  },
  computed: {},
  methods: {
    percentage (denominator, numerator) {
      return Math.round((numerator / denominator) * 100)
    },
    format (percentage) {
      return Math.round((percentage * 56) / 100)
    },
    handleUpload () {
      this.uploadFormVisible = true
    },
    actionLink () {
      return process.env.VUE_APP_BASE_API + '/work/upload'
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件`)
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    downloadFile () {
      alert('在做了')
    },
    handleSuccess () {
      this.$alert('上传成功！', '消息', {
        confirmButtonText: '好的',
        callback: action => {
          console.log('此时刷新列表')
        }
      })
    }
  }
}
</script>

<style scope>
</style>
