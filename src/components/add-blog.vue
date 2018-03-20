<template>
  
  <div id="add-blog">
    
    <form v-if="!submitted">
      <h2>Add a New Blog Post</h2>
      <label for="title">Blog Title</label>
      <input type="text" name="title" v-model.lazy="blog.title" required >
      <label for="content">Blog Content</label>
      <textarea name="content" v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <p v-for="cat in categories" :key=cat>
          <label for="">{{cat}}</label>
          <input type="checkbox" :value="cat" v-model.lazy="blog.categories">
        </p>
      </div>
      <label for="">Author</label>
      <select v-model="blog.author">
        <option v-for="x in authors" :key="x" :value="x">{{x}}</option>
      </select>
      <button @click.prevent="submitForm">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for submitting the form</h3>
      <button @click="submitted=false">Add Another Post</button>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import DB from "../firebase.init";
import uuid from 'uuid/v4'
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Jimmy Jakaka", "John Wizard", "Tom Porter"],
      categories: ["Coding", "Design", "Marketing", "Vision"],
      submitted: false
    };
  },
  methods: {
    submitForm() {
      console.log("Submitting");
      const uniqueID = uuid();
      const blog = {
        id: uniqueID,
        ...this.blog
      };
      DB.collection('blogs').doc(uniqueID).set(blog)
      .then( res => console.log('Blog Added at an id', res.id))
      .catch( err => console.log('Error occured', err));
      this.submitted = true;
      this.blog = {
        title: "",
        content: "",
        categories: [],
        author: ""
      }
    }
  }
};
</script>

<style>
#add-blog {
  max-width: 760px;
  margin: 2em auto;
}
form {
  padding: 2em;
}

form label {
  display: block;
  font-weight: bold;
  margin: 0.5em 0;
}

form input[type="text"],
form textarea {
  padding: 5px 10px;
  outline: 0;
  border: 1px solid #b5b5b5;
  display: block;
  min-width: 16.19em;
  border-radius: 5px;
}

form input:focus {
  border: 1px solid #00a8e8;
}

#checkboxes,
#checkboxes p {
  display: flex;
  align-items: center;
}

#checkboxes p input[type="checkbox"] {
  margin-right: 20px;
}
</style>
