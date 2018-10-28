import Vue from 'vue';
import Router from 'vue-router';
import CreateUser from './views/CreateUser.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { auth: true },
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/create',
            name: 'create',
            component: CreateUser
        },
        {
            path: '*',
            redirect: '/'
        }
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('./views/About.vue')
        // }
    ]
});

router.beforeEach((to, from, next) => {
    const authRequired = to.matched.some(route => route.meta.auth);
    // let authed = Store.state.auth.authenticated;
    // if (!authed) {
    //     checkAndSetAuthenticated();
    //     authed = Store.state.auth.authenticated;
    // }
    const authed = false;
    authRequired && !authed ? next('/login') : next();
});

export default router;
