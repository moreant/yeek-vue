<template>
  <div class="header">
    <span><router-link to="/">Yeek</router-link></span>
    <ul class="navbar-link">
      <li><a href="">GitHub</a></li>
      <li><a href="">帮助</a></li>
      <li><a href="">更新记录</a></li>
      <li><router-link to="login">登录</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {

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
      cursor: pointer;
      &:last-child {
        cursor: default;
      }
    }
  }
}
</style>
