<template>
  <div>
    <h1>装修中...</h1>
    <el-button @click="work" type="primary">去作业管理</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    work () {
      this.$router.push('/work/index')
    }
  }
}
</script>

<style></style>
