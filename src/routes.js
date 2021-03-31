import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/1', component: Register },
    { path: '/2', component: Login },
];

export default routes;