<template>
  <div>
    layout
    <sidebar />
      <app-main />
    <navbar />
  </div>
</template>

<script>

import { AppMain,Navbar, Sidebar } from './components';

export default {
  name: 'layout',
  components: {
    AppMain,
    Navbar,
    Sidebar
  }
}
</script>

<style>
</style>