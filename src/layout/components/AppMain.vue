<template>
  <section>
    <transition
      name="fade"
      mode="out-in"
    >
    AppMain
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style>
</style>
