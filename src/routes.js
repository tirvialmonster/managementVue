import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Login from './home/Login.vue'
import Index from './home/homepage.vue'

let routes = [
    {
        
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/index',
        component: Index,
        name: 'index'
    },
    {
        path: '*',
        component: Login,
        name: '404'
    }
];

export default routes;
