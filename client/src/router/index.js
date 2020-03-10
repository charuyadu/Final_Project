import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import About from '../views/About.vue'
import AboutUs from '../views/AboutUs.vue'
import Community from '../views/Community.vue'

import Track from '../views/Track.vue'
import Activity from '../views/Activity.vue'
import Log from '../views/Log.vue'
import Share from '../views/Share.vue'

import UserSupport from '../views/UserSupport.vue'
import Call from '../views/Call.vue'
import Chat from '../views/Chat.vue'
import Email from '../views/Email.vue'

import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/', name: 'About', component: About },
  { path: '/', name: 'AboutUs', component: AboutUs },
  { path: '/', name: 'Community', component: Community },
  { path: '/', name: 'Track', component: Track },
  { path: '/', name: 'Activity', component: Activity },
  { path: '/', name: 'Log', component: Log },
  { path: '/', name: 'Share', component: Share },
  { path: '/', name: 'UserSupport', component: UserSupport },
  { path: '/', name: 'Call', component: Call },
  { path: '/', name: 'Chat', component: Chat },
  { path: '/', name: 'Email', component: Email },
  { path: '/', name: 'Login', component: Login },
  { path: '/', name: 'SignUp', component: SignUp },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
