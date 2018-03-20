<template>
<footer>
  <p>{{copyright}}</p>
  {{title}}
</footer>

</template>

<script>
import {bus} from '../main';

export default {
  props: ['title'],
  data(){
    return {
      copyright: 'Copyright 2018 Jassi Learning'
    }
  },
  methods: {},
  created(){
    bus.$on('emitToBus', (x) =>{
      this.title = x
    })
  }
};
</script>

<style>
  footer {
    background: #222;
    padding: 6px;
    color: white;
  }

  p {
    color: lightgreen;
    text-align: center;
  }
</style>
