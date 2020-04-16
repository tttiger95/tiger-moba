import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import  Gong from '../views/Gong.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'/',name:'home',component:Home},
      {path:'/gonglue',name:'gonglue',component:Gong},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
