<template>
<header class="app-header">
  <router-link to="/" exact>Home</router-link>
  <router-link to="/add" exact>Add</router-link>
  <router-link to="/currencies" exact>Currencies</router-link>
</header>
</template>

<script>
export default {
  
  data() {
    return {}
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
  .app-header {
    background: #00a8e8;
    display: flex;
    height: 3.19em;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1em;
  }

  .app-header a {
    margin-left: 1em;
    padding: 0 1em;
    color: #fff;
    height: 3.19em;
    vertical-align: middle;
    line-height: 3.19em;
  }

  a.router-link-active{
    background: #fff;
    color: #00a8e8;
  }
</style>
