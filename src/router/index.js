import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Education from '../views/Education.vue'
import Project from '../views/Project.vue'
import Design from '../views/Project/Design.vue'
import Frontend from '../views/Project/Frontend.vue'
import Backend from '../views/Project/Backend.vue'
import Show from '../views/Show.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/education',
    name: 'education',
    component: Education
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/project/design',
    name: 'project.design',
    component: Design
  },
  {
    path: '/project/frontend',
    name: 'project.frontend',
    component: Frontend
  },
  {
    path: '/project/backend',
    name: 'project.backend',
    component: Backend
  },
  {
    path: '/show/:key',
    name: 'show',
    component: Show
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
}
})
export default router
