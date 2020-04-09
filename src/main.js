import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import '@/assets/css/main.css'
import Vuelidate from 'vuelidate'

// import {ValidationProvider, extend} from 'vee-validate';
// import {required, email} from 'vee-validate/dist/rules';

// Add the required rule
// extend('required', {
//   ...required,
//   message: 'This field is required'
// });

Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  // components: {
  //   ValidationProvider,
  // },
  router,
  render: h => h(App),
}).$mount('#app')
