<template>
  <div>
    <el-button @click="btnclick">
      当前年龄:{{ btnStr }}
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    btnStr () {
      return this.$store.state.age
    }
  },
  methods: {
    btnclick () {
      this.$store.commit('reduceAge')
    }
  }
}
</script>

<style></style>
