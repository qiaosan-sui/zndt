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
    path: '/products/locks/smart-lock-pro',
    name: 'SmartLockPro',
    component: () => import('@/views/products/locks/SmartLockPro.vue')
  },
  {
    path: '/products/locks/face-lock',
    name: 'FaceLock',
    component: () => import('@/views/products/locks/FaceLock.vue')
  },
  {
    path: '/products/cameras/smart-camera-2k',
    name: 'SmartCamera2K',
    component: () => import('@/views/products/cameras/SmartCamera2K.vue')
  },
  {
    path: '/products/cameras/outdoor-camera',
    name: 'OutdoorCamera',
    component: () => import('@/views/products/cameras/OutdoorCamera.vue')
  },
  {
    path: '/products/switches/smart-panel',
    name: 'SmartPanel',
    component: () => import('@/views/products/switches/SmartPanel.vue')
  },
  {
    path: '/products/switches/dimmer-switch',
    name: 'DimmerSwitch',
    component: () => import('@/views/products/switches/DimmerSwitch.vue')
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('@/views/Solutions.vue')
  },
  {
    path: '/solutions/:type',
    name: 'SolutionDetail',
    component: () => import('@/views/solutions/SolutionDetail.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/about/About.vue'),
    children: [
      {
        path: '',
        name: 'About',
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
  },
  // 服务支持路由
  {
    path: '/support',
    children: [
      {
        path: 'download',
        name: 'Download',
        component: () => import('@/views/NotFound.vue')
      },
      {
        path: 'manual',
        name: 'Manual',
        component: () => import('@/views/NotFound.vue')
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: () => import('@/views/NotFound.vue')
      }
    ]
  },
  // 商业合作路由
  {
    path: '/cooperation',
    children: [
      {
        path: 'channel',
        name: 'Channel',
        component: () => import('@/views/NotFound.vue')
      },
      {
        path: 'oem',
        name: 'OEM',
        component: () => import('@/views/NotFound.vue')
      }
    ]
  },
  // 404 路由，放在最后
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
