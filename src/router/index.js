import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/HmGarmentUsers/Services'
import Blog from '@/components/HmGarmentUsers/Blog'
import Solutions from '@/components/HmGarmentAdmin/Solutions'
import Admin from '@/components/HmGarmentAdmin/Admin'
import ContactUs from '@/components/HmGarmentUsers/ContactUs'
import NewService from '@/components/HmGarmentAdmin/NewService'

Vue.use(VueRouter)
export default new VueRouter({
routes: [
  {
    //over view about hot products to be served
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    //convince about the products: security and automation : cctv, server, smart doorlock, 
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    //hard ware & sw products developed
    path: '/services/blog',
    name: 'Blog',
    component: Blog
  },
  {
    //given to customer
    path: '/solutons',
    name: 'Solutions',
    component: Solutions
  },
  {
    path: '/HmGarmentPLC/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/contact_us',
    name: 'ContactUs',
    component: ContactUs
  },

  {
    path: '/HmGarmentPLC/Admin/addNewServices',
    name: 'NewService',
    component: NewService
  }

],
mode: 'history'
})
