<template>
  <section>
    <span class="page-title">{{ pageTitle }}</span>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    },
    pageTitle () {
      return this.$route.meta.title
    }
  }
}
</script>

<style scope>
.page-title {
  display: block;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
}
</style>
