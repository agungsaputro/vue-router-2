import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.css'

import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)
Vue.config.productionTip = false
Vue.mixin({
  data: function(){
    return{
      paginate:["postPagine", "photoPagine", "albumPagine","homePagine"]
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
