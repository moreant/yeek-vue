<template>
  <div>
    <el-button-group style="margin-left: 10px">
      <el-button type="primary" size="mini" icon="el-icon-download"></el-button>
      <el-popover placement="top" v-model="visible">
        <p>确定删除这一项吗吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false"
            >取消</el-button
          >
          <el-button type="primary" size="mini" @click="delItem(123)"
            >确定</el-button
          >
        </div>
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
          slot="reference"
        ></el-button>
      </el-popover>
    </el-button-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    delItem (id) {
      alert(id)
    }
  }
}
</script>

<style></style>
