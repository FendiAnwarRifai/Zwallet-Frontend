import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueRouter from 'vue-router'
import store from '../store/index'
import Landing from '@/views/landing.vue'

import auth from '@/views/auth/auth.vue'
import emailVerify from '@/views/auth/emailVerify.vue'
import login from '@/views/auth/login.vue'
import register from '@/views/auth/register.vue'

import Main from '@/views/main/main.vue'

import Dashboard from '@/views/main/dashboard/dashboard.vue'
import historyTransaction from '@/views/main/dashboard/historyTransaction.vue'

import topup from '@/views/main/topup/topup.vue'

import Transaction from '@/views/main/transfer/transaction.vue'
import TransferUser from '@/views/main/transfer/transferUser.vue'
import profile from '@/views/main/profile/profile.vue'
import personalInfo from '@/views/main//profile/personalInfo.vue'
import managePhone from '@/views/main//profile/managePhone.vue'
import editPhone from '@/views/main//profile/editPhone.vue'
import secondaryPhone from '@/views/main//profile/addSecondaryPhone.vue'

Vue.use(VueSweetalert2)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/emailVerify/:id',
    name: 'emailVerify',
    component: emailVerify
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth,
    redirect: 'auth/login',
    children: [
      {
        path: 'register',
        name: 'register',
        component: register,
        meta: { requiresVisitor: true }
      },
      {
        path: 'login',
        name: 'login',
        component: login,
        meta: { requiresVisitor: true }
      }
    ]
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    redirect: 'main/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: 'topup',
        name: 'topup',
        component: topup,
        meta: { requiresAuth: true }
      },
      {
        path: 'transaction',
        name: 'transaction',
        component: Transaction,
        meta: { requiresAuth: true }
      },
      {
        path: 'TransferUser',
        name: 'transaction',
        component: TransferUser,
        meta: { requiresAuth: true }
      },
      {
        path: 'history',
        name: 'dashboard',
        component: historyTransaction,
        meta: { requiresAuth: true }
      },
      {
        path: 'profile',
        name: 'profile',
        component: profile,
        meta: { requiresAuth: true }
      },
      {
        path: 'personalInfo',
        name: 'profile',
        component: personalInfo,
        meta: { requiresAuth: true }
      },
      {
        path: 'managePhone',
        name: 'profile',
        component: managePhone,
        meta: { requiresAuth: true }
      },
      {
        path: 'editPhone',
        name: 'profile',
        component: editPhone,
        meta: { requiresAuth: true }
      },
      {
        path: 'secondaryPhone',
        name: 'profile',
        component: secondaryPhone,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      Vue.swal.fire({
        title: 'Error!',
        text: 'the page cannot be accessed',
        icon: 'error',
        confirmButtonText: 'Relogin'
      })
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      Vue.swal.fire({
        title: 'Error!',
        text: 'the page cannot be accessed',
        icon: 'error',
        confirmButtonText: 'Relogin'
      })
      next({
        path: '/main'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
