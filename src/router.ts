import Vue from 'vue';
import Router from 'vue-router';
import Store from './store';
import CreateUser from './views/create-user.view.vue';
import LoginUser from './views/login-user.view.vue';
import Notes from './views/notes.view.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'notes',
            meta: { auth: true },
            component: Notes
        },
        {
            path: '/login',
            name: 'login',
            component: LoginUser
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
    const checkAuth = () => (Store.state.user.auth ? Store.state.user.auth.token : false);
    let authed = checkAuth();
    if (!authed) {
        const token = localStorage.getItem('accessToken');
        if (token) {
            Store.commit('setAuth', { token: { token } });
        }
        authed = checkAuth();
    }
    authRequired && !authed ? next('/login') : next();
});

export default router;
