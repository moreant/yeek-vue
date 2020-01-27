<template>
  <section>
    <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  },
}
</script>

<style>
</style>