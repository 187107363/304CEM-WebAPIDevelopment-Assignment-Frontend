import Vue from 'vue';
import Router from 'vue-router';

import Login from './pages/Login.vue';
// import ErrorPage from '@/pages/Error/Error';
import Navbar from "./pages/Navbar.vue";
import Footer from "./pages/Footer.vue";
import Register from './pages/Register.vue'
import Item from './pages/CreateItem.vue'
import Raffle from './pages/Raffle.vue'
// Main
import Main from '@/pages/Main.vue';

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    mode: 'history',
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/',
            name: 'Main',
            header: Navbar,
            component: Main,
            footer: Footer
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }, {
            path: '/Item',
            name: 'Item',
            component: Item
        },
        {
            path: '/Raffle',
            name: 'Raffle',
            component: Raffle
        },
    ],
});