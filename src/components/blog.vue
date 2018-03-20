<template>
  <div class="blog">
    <h1>{{blog.title}}</h1>
    <p>{{blog.content}}</p>
    <p>{{blog.autohr}}</p>
    <p>
      <span v-for="(cat, index) in blog.categories" :key="index">{{cat}}</span>
    </p>
    <button @click="deleteBlog">Delete Blog</button>
  </div>
</template>

<script>
import DB from "../firebase.init";
import {  } from 'vue-router'
export default {
  
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  // Bring data from Database
  created(){
    DB.collection('blogs').doc(this.id).get()
    .then( result => {
      if(result.exists){
        this.blog = result.data();
      }
      else{
        console.log('Document dont exists')
      }
    })
    .catch(err => console.log('eror', err) )
  },
  methods: {
    deleteBlog(){
      DB.collection('blogs').doc(this.id).delete()
      .then( res => console.log('Result of Deletion', res));
      // router.push({ path: '' })
      this.$router.push({path: ''})

    }
  }
};
</script>

<style scoped>
.blog {
  max-width: 720px;
  margin: 0 auto;
  padding: 1em;
}

.blog p span {
  margin-right: 10px;
}
</style>
