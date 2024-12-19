import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('@/views/products/ProductDetail.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/About.vue'),
    redirect: '/about/company',
    children: [
      {
        path: 'company',
        name: 'Company',
        component: () => import('@/views/about/Company.vue')
      },
      {
        path: 'culture',
        name: 'Culture',
        component: () => import('@/views/about/Culture.vue')
      },
      {
        path: 'join',
        name: 'Join',
        component: () => import('@/views/about/Join.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/about/Contact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
