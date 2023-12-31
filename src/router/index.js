import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/page1',
                    name: 'page1',
                    component: () => import('@/views/page1'),
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: () => import('@/views/page2')
                },
                {
                    path: '/page3',
                    name: 'page3',
                    component: () => import('@/views/page3')
                },
                {
                    path: '/page4',
                    name: 'page4',
                    component: () => import('@/views/page4')
                },
                {
                    path: '/page5',
                    name: 'page5',
                    component: () => import('@/views/page5')
                },
                {
                    path: '/page6',
                    name: 'page6',
                    component: () => import('@/views/page6')
                },
                {
                    path: '/page7',
                    name: 'page7',
                    component: () => import('@/views/page7')
                },
                {
                    path: '/page8',
                    name: 'page8',
                    component: () => import('@/views/page8')
                },
                {
                    path: '/page9',
                    name: 'page9',
                    component: () => import('@/views/page9')
                },
                {
                    path: '/page10',
                    name: 'page10',
                    component: () => import('@/views/page10')
                },
                {
                    path: '/baseDetails',
                    name: 'baseDetails',
                    component: () => import('@/views/baseDetails')
                },
            ],
        }
    ]
})
export default router
