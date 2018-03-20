<template>

<div>
  <app-header></app-header>
  <router-view></router-view>  
</div>  

</template>

<script>
import Header from './components/header'
export default {
  components: {
    "app-header": Header
  },
  data() {
    return {};
  },
  methods: {}
};

</script>

<style src="./app.css"></style>
<style>

</style>
