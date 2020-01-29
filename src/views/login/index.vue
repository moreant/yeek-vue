<template>
  <div class="login-container">
    <el-header>
      <navbar />
    </el-header>
    <el-form class="login-form" label-position="left" :rules="loginRules">
      <div class="title">
        <h3>登录</h3>
      </div>
      <el-form-item>
        <el-input
          ref="username"
          placeholder="请输入账号"
          v-model="loginForm.username"
          prefix-icon="el-icon-user"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          ref="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
          prefix-icon="el-icon-lock"
          show-password
          @keyup.enter.native="handleLogin"
        ></el-input>
      </el-form-item>
      <el-button type="primary" style="width:100%" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import Navbar from '@/layout/components/Navbar'

export default {
  name: 'login',
  components: { Navbar },

  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validateUsername(value)) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'user',
        password: 'pass'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.login-container {
  input {
    background: transparent;
    color: #ffffff;
  }
  .el-form-item {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>

<style lang="scss" scoped>
.login-container {
  background-color: #34495e;
  color: #dcdfe6;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .title {
    font-size: 2em;
    color: #dcdfe6;
    text-align: center;
  }

  .login-form {
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>
