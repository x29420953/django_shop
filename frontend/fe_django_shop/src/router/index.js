import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import AccountLogin from '../views/accounts/Login.vue'
import AccountRegister from '../views/accounts/Register.vue'
import Mine from '../views/accounts/Mine.vue'
import Info from '../views/accounts/Info.vue'
import Modify from '../views/accounts/Modify.vue'
import Cart from '../views/order/Cart.vue'
import Pay from '../views/order/Pay.vue'
import Order from '../views/order/Order.vue'
import OrderDetail from '../views/order/OrderDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/account/login',
    name: 'AccountLogin',
    component: AccountLogin
  },
  {
    path: '/account/register',
    name: 'AccountRegister',
    component: AccountRegister
  },
  {
    path: '/mine',
    name: 'Mine',
    meta: {
      requireAuth: true, 
    },
    component: Mine
  },
  {
    path: '/account/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/account/modify',
    name: 'Modify',
    component: Modify
  },
  {
    path: '/cart',
    name: 'Cart',
    redirct: '/cart',
    meta: {
      requireAuth: true,
    },
    component: Cart
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/order/:id',
    name: 'OrderDetail',
    component: OrderDetail
  }
]

const router = new VueRouter({
  routes
})

export default router

import store from '../store/index.js'

router.beforeEach((to, from, next) => {
  const isLogin = store.state.user.id;
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (isLogin) { 
      next();
    }
    else {
      next({
        path: '/account/login'
      })
    }
  }
  else {
    next();
  }
});