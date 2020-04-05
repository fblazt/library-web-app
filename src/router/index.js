import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Dashboard from '@/views/Dashboard';
import DetailBook from '@/views/DetailBook';
import BorrowBooks from '@/views/BorrowBooks';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/detail-book/:id',
    name: 'DetailBook',
    component: DetailBook,
  },
  {
    path: '/user/borrow-books',
    name: 'BorrowBooks',
    component: BorrowBooks,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;