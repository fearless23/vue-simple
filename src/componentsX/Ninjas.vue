<template>
<main>
  <ul>
    <li v-for="(ninja, i) in ninjas" :key="i" @click="ninja.show = !ninja.show">
      <h2>{{ninja.name}} </h2>
      <h3 v-show="ninja.show">{{ninja.speciality}} </h3>
    </li>
  </ul>
  <button @click=deleteNinja>Delete Ninja</button>
</main>

</template>

<script>

export default {
  props: {
    ninjas: {
      type: Array
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    deleteNinja(){
      this.ninjas.pop();
    }
  },
  // lifecycle hooks
  beforeCreate(){
    alert('before create');
    console.log('before Created');
  },
  created(){
    // Get data from database
    alert('Created');
    console.log('Created');
  },
  beforeMount(){
    alert('beforeMount');
    console.log('before Mounting to HTML Node');
  },
  mounted(){
    // manuplate dom after mounted
    alert('mounted');
    console.log('View Mounted, Node Created and Added in htML');
  },
  beforeUpdate(){
    alert('Before Updated');
    console.log('before Update');
  },
  updated(){
    alert('Updated');
    console.log('Component Updated');
  }
}; 
</script>

<style scoped>
  main {
    margin: 2em;
  }
  ul {
    width: 300px;
    border: 1px solid #b5b5b5;
    box-sizing: border-box;
  }

  li {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 300px;
    padding: 0 20px;
    justify-content: space-between;
    border-bottom: 1px solid #b5b5b5;
  }

  li h2 {
    cursor: pointer;
    color: hotpink;
  }
  li h3 {
    margin-left: 20px;
  }
</style>
