import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import AboutUs from '../views/AboutUs.vue'
import Community from '../views/Community.vue'

import Track from '../views/Track.vue'
import Run from '../views/Run.vue'
import Jog from '../views/Jog.vue'
import Exercise from '../views/Exercise.vue'
import Water from '../views/Water.vue'
import Food from '../views/Food.vue'
import Health from '../views/Health.vue'

import Call from '../views/Call.vue'
import Chat from '../views/Chat.vue'
import Email from '../views/Email.vue'

import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Community', name: 'Community', component: Community, meta: {isSecret:false} },
  { path: '/Run', name: 'Run', component: Run},
  { path: '/Jog', name: 'Jog', component: Jog, meta: {isSecret:false} },
  { path: '/Exercise', name: 'Exercise', component: Exercise, meta: {isSecret:false}},
  { path: '/Food', name: 'Food', component: Food, meta: {isSecret:false} },
  { path: '/Water', name: 'Water', component: Water, meta: {isSecret:false} },
  { path: '/Health', name: 'Health', component: Health, meta: {isSecret:false} },
  { path: '/Call', name: 'Call', component: Call, meta: {isSecret:false} },
  { path: '/Chat', name: 'Chat', component: Chat, meta: {isSecret:false} },
  { path: '/Email', name: 'Email', component: Email, meta: {isSecret:false} },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/SignUp', name: 'SignUp', component: SignUp },

  {
    path: '/aboutUs',
    name: 'About Us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//router.beforeEach((to, from, next) => {
  //if(to.meta.isSecret && !CurrentUser) next('/Login');
  //else next();
//});

export default router
