// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/index.css'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

import axios from 'axios'
Vue.prototype.$http=axios

import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')


var store = new Vuex.Store({
  state:{
    count:false,
    car:car,
    shuliangs:''

  },
  mutations:{
    aa(state){
      state.count =false
    },
    bb(state){
      state.count =true
    },

    addtocar(state,shuju){
      var flag = false

      state.car.some(item=>{
        if(item.id == shuju.id){
         item.count +=shuju.count        
          flag = true
          return true
        }
      })

      if(flag == false){
        state.car.push(shuju)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    shuliang(state,shuliang){
      state.shuliangs = shuliang
    },
    remove(state,y){
      state.car.splice(y,1)
      localStorage.setItem('car',JSON.stringify(state.car))
    
    },
    jian(state,x){
      if(state.car[x].count==0){
      state.car[x].count == 0

      }else{
        state.car[x].count--
      }
     
      localStorage.setItem('car',JSON.stringify(state.car))

    },
    jia(state,x){
  
      state.car[x].count++
      localStorage.setItem('car',JSON.stringify(state.car))

    }
   
    
    
  },
  getters:{
    getAllCount(state){
      var c = state.shuliangs;
      // state.car.forEach(item=>{
        // c+=item.count*item.price
      // })
      return c
    },
    getGoodsCount(state){
      var o = {};
      state.car.forEach(item=>{
        o[item.id]=item.count
      })
      return o
    }
  }
})


Vue.config.productionTip = false
import 'lib-flexible/flexible.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
