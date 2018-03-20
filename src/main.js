import Vue from 'vue';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);
import {Routes} from './routes';

Vue.use(VueResource);
// export const bus = new Vue()


const Router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Custom Directives
Vue.directive('rainbow', {
  bind(el) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});

Vue.directive('theme', {
  bind(el, binding) {
    // el.style.color = '#' + Math.random().toString().slice(2,8);
    if (binding.value == 'blue') {
      el.style.background = '#fff'
    }
    if (binding.value == 'red') {
      el.style.background = '#000'
    }
  }
});

// Custom Filters
// Vue.filter('toUpperCase', function(value){
//   return value.toUpperCase()
// });


new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
