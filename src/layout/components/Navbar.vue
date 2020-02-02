<template>
  <div class="header">
    <span>
      <router-link to="/">Yeek</router-link>
    </span>

    <ul class="navbar-link">
      <template v-if="username">
        <li>当前用户：{{ username }}</li>
        <el-divider direction="vertical"></el-divider>
        <li><a @click="logout" href="javascript:;">注销</a></li>
      </template>
      <template v-else>
        <li>
          <a target="_blank" href="https://github.com/moreant/yeek-vue"
            >GitHub</a
          >
        </li>
        <el-divider direction="vertical"></el-divider>
        <li>
          <a
            target="_blank"
            href="https://github.com/PanJiaChen/vue-element-admin"
            >Fork By PanJiaChen</a
          >
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    username () {
      return this.$store.state.user.name
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout').then(() => {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    color: #ffffff;
    span {
      a {
        color: #ffffff;
        font-size: 30px;
        line-height: 60px;
      }
    }
    .navbar-link {
      float: right;
      padding-right: 30px;
      height: 100%;
      li {
        a {
          color: #fff;
        }
        display: inline-block;
        padding: 0 10px;
        margin: 0 10px;
        line-height: 60px;
      }
    }
  }
</style>
