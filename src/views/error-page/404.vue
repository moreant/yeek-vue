<template>
  <div>404 - NotFoundURL: {{ this.$route.path | removeRoot}}</div>
</template>

<script>
export default {
  name: 'notfound',
  data () {
    return {
      path: 'no get path'
    }
  },
  filters: {
    removeRoot (value) {
      return value.substr(1)
    }
  },
  methods: {

  },
}
</script>

<style>
</style>