<template>
  <div>
    <p>User {{ $route.params.id }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'User'

}
</script>

<style>
</style>>