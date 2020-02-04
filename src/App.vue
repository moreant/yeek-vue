<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.fetchWork()
  },
  methods: {
    fetchWork () {
      this.$store.dispatch('work/info')
    }
  }
}
</script>

<style></style>
