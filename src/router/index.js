import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/pages/LoginPage.vue'
import Registration from '@/pages/RegistationPage.vue'
import ListCompanies from '@/pages/companies/ListPage.vue'
import CreateCompany from '@/pages/companies/CreatePage.vue'
import EditCompany from '@/pages/companies/EditPage.vue';
import Logout from '@/pages/LogoutPage.vue';

const storage = require('@/utils/localStorage');

const ifAuthenticated = () => {
    return !!storage.get('token');
};

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresAuth: false },
        beforeEnter: () => {
            return !ifAuthenticated()
        },
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
        meta: { requiresAuth: false },
        beforeEnter: () => {
            return !ifAuthenticated()
        },
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
        meta: { requiresAuth: true },
        beforeEnter: () => {
            return ifAuthenticated()
        },
    },
    {
        path: '/companies/:id',
        name: 'EditCompany',
        component: EditCompany,
        meta: { requiresAuth: true },
        beforeEnter: () => {
            return ifAuthenticated()
        },
    },
    {
        path: '/companies',
        component: ListCompanies,
        name: 'ListCompanies',
        meta: { requiresAuth: true },
        beforeEnter: () => {
            return ifAuthenticated()
        },
    },
    {
        path: '/companies/create',
        component: CreateCompany,
        name: 'CreateCompany',
        meta: { requiresAuth: true },
        beforeEnter: () => {
            return ifAuthenticated()
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router