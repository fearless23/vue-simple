<template>
  <div>
    <!-- <app-header :title="title" v-on:emitChangeTitle="changeTitle($event)"></app-header>
    <ninjas :ninjas="ninjas"></ninjas>
    <app-footer :title=title></app-footer> -->
    <!-- <form-one :title=title>
      <div slot=form-header>
        <h3>This is the Title of the form</h3>
        <p>Info about the form</p>
      </div>
      <div slot=form-fields>
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password">
      </div>
      <div slot=form-controls>
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-one> -->
    <div>
      <keep-alive><component :is="component"></component></keep-alive>
      <button @click="toogleComp('form-one')">Toogle One</button>
      <button @click="toogleComp('form-two')">Toogle Two</button>
    </div>

  </div>
</template>

<script>
// import Header from './components/Header'
// import Ninjas from './components/Ninjas.vue'
// import Footer from './components/Footer'
import FormOne from './components/formOne'
import FormTwo from './components/formTwo'
export default {
  components: {
    // 'app-header': Header,
    // 'ninjas': Ninjas,
    // 'app-footer': Footer,
    'form-one': FormOne,
    'form-two': FormTwo
  },
  data() {
    return {
      title: 'Vue CLI Learning - Ninjas',
      ninjas: [
        { name: 'Will', speciality: 'Flying', show: false},
        { name: 'John', speciality: 'Punch', show: false},
        { name: 'Tom', speciality: 'Running', show: false},
        { name: 'Ryu', speciality: 'Coding', show: false},
        { name: 'Kami', speciality: 'Disappearing', show: false},
        { name: 'John', speciality: 'Manager', show: false},
      ],
      component: 'form-one'
    };
  },
  methods: {
    toogleComp(x){
      this.component = x;
    }
  }
};
</script>

<style src="./app.css"></style>
