<template>
  <el-dialog title="添加作业" :visible.sync="dialogVisible" width="50%">
    <el-form :model="createForm" label-width="auto">
      <el-form-item prop="name" label="作业名称" required>
        <el-col :span="10">
          <el-input
            v-model="createForm.name"
            autocomplete="off"
            placeholder="请填写名称"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="courseName" label="科目" required>
        <el-select v-model="createForm.courseName" placeholder="请选择科目">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择日期">
        <el-date-picker
          v-model="createForm.date"
          type="daterange"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="createForm.remark" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="createFormSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      dialogVisible: false,
      createForm: {
        name: '',
        courseName: '',
        date: '',
        remark: ''
      }
    }
  },
  props: {
    show: Boolean
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
  methods: {
    createFormSubmit () {
      alert('创建')
    }
  }
}
</script>

<style></style>
