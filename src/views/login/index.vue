<template>
  <div class="login-container">
    <el-header>
      <navbar />
    </el-header>
    <el-form
      class="login-form"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
    >
      <div class="title">
        <h3>Yeek 作业管理</h3>
      </div>
      <el-form-item prop="username">
        <el-input
          ref="username"
          placeholder="请输入账号"
          v-model="loginForm.username"
          prefix-icon="el-icon-user"
          clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          ref="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
          prefix-icon="el-icon-lock"
          show-password
          @keyup.enter.native="handleLogin"
        ></el-input>
      </el-form-item>
      <el-button type="primary" style="width:100%" @click="handleLogin">
        登录
      </el-button>
      <br>
      <p>账号密码皆可随意，唯有 admin 账号有所有权限。</p>
      <p>editor 账号有添加作业的权限，没有进入初始页面的权限。</p>

    </el-form>

  </div>
</template>

<script>
import Navbar from '@/layout/components/Navbar'

export default {
  name: 'login',
  components: { Navbar },

  data () {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'pass'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || '/',
                query: this.otherQuery
              })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
              // eslint-disable-next-line no-debugger
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-container {
  input {
    color: #dcdfe6;
    background: transparent;
  }
  .el-form-item {
    color: #dcdfe6;
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
