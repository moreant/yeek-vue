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
      <el-table-column label="收集情况">
        <el-progress :percentage="46"></el-progress>
      </el-table-column>
      <el-table-column label="操作">
        <el-button-group>
          <el-button size="mini">下载</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </el-button-group>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加作业"
      :visible.sync="createFormVisible"
      :before-close="handleClose"
      width="50%"
    >
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
        <el-form-item label="开始日期">
          <el-col :span="10">
            <el-date-picker
              v-model="createForm.star"
              type="date"
              placeholder="选择日期"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-col :span="10">
            <el-date-picker
              v-model="createForm.end"
              placeholder="选择日期"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="createForm.remark" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="createFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createFormVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { postWork } from '@/api/work'

export default {
  name: 'WorkEditor',
  data () {
    return {
      createFormVisible: false,
      workList: [
        {
          name: '课堂练习',
          courseName: '科目',
          start: '开始日期',
          end: '截止日期',
          remark: '请打包上交sec文件中的文件，格式为zip'
        },
        {
          name: '课堂练习',
          courseName: '科目',
          star: '开始日期',
          end: '截止日期'
        },
        {
          name: '课堂练习',
          courseName: '科目',
          star: '开始日期',
          end: '截止日期'
        },
        {
          name: '课堂练习',
          courseName: '科目',
          star: '开始日期',
          end: '截止日期'
        }
      ],
      queryForm: {
        name: '',
        courseName: ''
      },
      createForm: {
        name: '',
        courseName: '',
        date: '',
        remark: ''
      }
    }
  },
  methods: {
    handleCreate () {
      this.createFormVisible = true
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    createFormSubmit () {
      postWork(this.createForm).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style scope>
.line {
  text-align: center;
}
</style>
