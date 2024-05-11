import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AccountView from "@/views/AccountView.vue";
import TrackingView from "@/views/TrackingView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountView
  },
  {
    path: '/tracking',
    name: 'Tracking',
    component: TrackingView
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
