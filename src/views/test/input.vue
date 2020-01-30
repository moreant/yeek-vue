<template>
  <div>
    <el-form :model="ageForm" :rules="rules" ref="ageForm">
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ageForm.age"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        callback(new Error('年龄不能为空'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        age: [{ trigger: 'blur', validator: checkAge }]
      }
    }
  },
  computed: {
    ageForm () {
      return {
        age: this.$store.state.age
      }
    }
  }
}
</script>

<style></style>
