<template>
  
  <div v-theme="foo" id="blog">
    <h1>Blog List</h1>
    <!-- <button @click="foo='red'">Red</button>{{foo}} -->
    <input type="text" v-model="search" placeholder="Type to search">
    <div v-for="(blog,index) in filteredBlogs" :key=index class="single-blog">
      <h3 v-rainbow>{{blog.title}}</h3>
      <p>{{blog.content|wrap}}</p>
      <router-link :to="'/blog/'+blog.id"><button >Open Blog</button></router-link>
      <button class="red" @click="deleteBlog(blog.id)">Delete Blog</button>
    </div>
  </div>
</template>

<script>
import wrap from "../filters/wrap";
import SearchMixin from "../mixins/search-mixin";
import DB from "../firebase.init";
export default {
  filters: {
    wrap: wrap,
    wrap2: x => x.slice(0, 99) + "...",
    toUpperCase: x => x.toUpperCase()
  },
  mixins: [SearchMixin],
  data() {
    return {
      blogs: [],
      foo: "blue",
      search: ""
    };
  },
  computed: {},
  created() {
    DB.collection("blogs")
      .get()
      .then(result => this.blogs = result.docs.map(doc => doc.data()))
      .catch(err => console.log("Error", err));
  },
  methods: {
    deleteBlog(x){
      DB.collection('blogs').doc(x).delete()
      .then( res => console.log('Result of Deletion', res));
      // router.push({ path: '' })
      this.$router.push({path: ''})

    }
  }
};
</script>

<style>
#blog {
  max-width: 800px;
  margin: 2em auto;
}

.single-blog {
  padding: 20px;
  margin-bottom: 20px;
  background: #eee;
}

#blog input {
  width: 20em;
  margin: 0 auto;
  padding: 5px 10px;
}

button.red {
  background: #ef233c;
}
</style>
