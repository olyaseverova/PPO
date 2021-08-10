import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/control',
    name: 'Control',
    component: () => import(/* webpackChunkName: "about" */ '../views/Control.vue'),
    children: [
      {
        path: '/analytics',
        component: () => import(/* webpackChunkName: "about" */ '../components/ControlAnalytics.vue'),
      },
      {
        path: '/statistics',
        component: () => import(/* webpackChunkName: "about" */ '../components/ControlStatistics.vue'),
      }
    ]
  },
  {
    path: '/michael',
    name: 'Michael',
    component: () => import(/* webpackChunkName: "about" */ '../views/Michael/Michael.vue'),
  },
  {
    path: '/michael-structure',
    name: 'Structure',
    component: () => import(/* webpackChunkName: "about" */ '../views/Michael/Structure.vue')
  },
  {
    path: '/michael-materials',
    name: 'Materials',
    component: () => import(/* webpackChunkName: "about" */ '../views/Michael/Materials.vue')
  },
  {
    path: '/michael-timetable',
    name: 'Timetable',
    component: () => import(/* webpackChunkName: "about" */ '../views/Michael/Timetable.vue')
  },
  {
    path: '/michael-prayer',
    name: 'Prayer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Michael/Prayer.vue')
  },
  {
    path: '/enter',
    name: 'Enter',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/Enter.vue')
  },
  {
    path: '/enter-michael',
    name: 'EnterMichael',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterMichael/EnterMichael.vue')
  },
  {
    path: '/enter-michael-add',
    name: 'EnterMichaelAdd',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterMichael/EnterMichaelAdd.vue')
  },
  {
    path: '/enter-michael-edit',
    name: 'EnterMichaelEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterMichael/EnterMichaelEdit.vue')
  },
  {
    path: '/enter-news',
    name: 'EnterNews',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterNews/EnterNews.vue')
  },
  {
    path: '/enter-news-birthday',
    name: 'EnterNewsBirthday',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterNews/EnterNewsBirthday.vue')
  },
  {
    path: '/enter-news-edit',
    name: 'EnterNewsEdit.vue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterNews/EnterNewsEdit.vue')
  },
  {
    path: '/enter-control-pray',
    name: 'EnterControlPray.vue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterControl/EnterControlPray.vue')
  },
  {
    path: '/enter-control-reading',
    name: 'EnterControlReading.vue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterControl/EnterControlReading.vue')
  },
  {
    path: '/enter-report',
    name: 'EnterReport.vue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterReport.vue')
  },
  {
    path: '/enter-report-a1',
    name: 'EnterReportA1.vue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter/EnterReportA1.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
