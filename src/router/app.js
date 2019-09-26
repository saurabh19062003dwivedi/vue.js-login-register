export default {
    routes: [{
        path: '/Login',
        name: 'login',
        component: resolve => require(['modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Register',
        name: 'register',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        },
        // path: '/Sidebar',
        // name: 'sidebar',
        // component: resolve => require(['components/frame/Sidebar.vue'], resolve),
        // meta: {
        //     tokenRequired: false
        // },
        // path: '/Sidebar',
        // name: 'sidebar',
        // component: resolve => require(['components/frame/Sidebar.vue'], resolve),
        // meta: {
        //     tokenRequired: false
        // }
    }]
}