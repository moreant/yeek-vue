<template>
  <div id="app">
    <p>
      <router-link to="/a">A</router-link>
    </p>
    <p>
      <router-link :to="{ name: 'user', params:{id:123} }">U</router-link>
    </p>
    <p><a
        href="javascript:;"
        @click="gotoRouter"
      >编程式路由</a>
    </p>
    <p><a
        href="javascript:;"
        @click="back"
      >back</a>
    </p>
    <p>
      <router-link to="/about">b</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    gotoRouter () {
      this.$router.push({ name: 'home' })
    },
    back () {
      this.$router.go(-1);
    }
  },
}
</script>

<style>
</style>
