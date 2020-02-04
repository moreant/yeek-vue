<template>
  <el-dialog title="文件" :visible.sync="dialogVisible">
    <h3>科目 - 课堂练习 的文件</h3>
    <el-upload
      :action="actionLink()"
      :on-exceed="handleExceed"
      :on-success="handleSuccess"
      :on-error="handleError"
      :before-remove="handleRemove"
      :file-list="file"
      :auto-upload="false"
      :limit="1"
    >
      <div slot="tip">
        只能上传一个文件，且不超过20MB
      </div>
      <el-button
        slot="trigger"
        type="primary"
        :disabled="file.length === 1"
      >
        <i class="el-icon-folder-opened"></i>
        选择文件
      </el-button>
      <el-button
        ref="submitUploadButton"
        type="primary"
        style="margin-left: 10px;"
        @click="submitUpload"
        :disabled="file.length === 1"
      >
        <i class="el-icon-upload2"></i>
        上传文件
      </el-button>
      <el-button
        type="primary"
        @click="downloadFile"
        :disabled="file.length === 0"
      >
        <i class="el-icon-download"></i>
        下载文件
      </el-button>
    </el-upload>
    <span slot="footer">
      <el-button @click="dialogVisible = false">关 闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'FileDialog',
  data () {
    return {
      dialogVisible: false
    }
  },
  props: {
    show: Boolean,
    file: Array
  },
  watch: {
    show (val) {
      this.dialogVisible = val
    },
    dialogVisible (val) {
      if (!val) {
        this.$emit('close')
      }
    }
  },
  computed: {
  },
  methods: {
    actionLink () {
      return process.env.VUE_APP_BASE_API + '/work/upload'
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除后再选择文件。`)
    },
    handleRemove (file, fileList) {
      this.$confirm('此操作将永久删除该文件，是否继续', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.fileList = []
          // 发送删除请求
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      return false
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    downloadFile () {
      alert('在做了')
    },

    handleSuccess () {
      this.$confirm('上传成功！', '消息', {
        confirmButtonText: '好的',
        callback: action => {
          console.log('此时刷新列表')
        }
      })
    },
    handleError () {
      this.$alert('上传失败', '严重', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'error',
            message: '上传失败'
          })
        }
      })
    }
  }
}
</script>

<style></style>
