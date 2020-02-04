<template>
  <div>
    <work-console />
    <work-table @file-dialog="fileDialog" />
    <file-dialog :show="dialogVisible" :file="file" @close="dialogVisible = false" />
  </div>
</template>

<script>
import WorkConsole from '@/components/work/Console'
import WorkTable from '@/components/work/Table'
import FileDialog from '@/components/work/FileDialog'

export default {
  name: 'WorkIndex',
  data () {
    return {
      dialogVisible: false,
      file: []
    }
  },
  components: {
    WorkConsole,
    WorkTable,
    FileDialog
  },
  methods: {
    fileDialog (file) {
      this.dialogVisible = true
      this.file = file
    }
  }
}
</script>

<style scope></style>
