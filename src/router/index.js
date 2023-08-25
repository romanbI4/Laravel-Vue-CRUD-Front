import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/pages/LoginPage.vue'
import Registration from '@/pages/RegistationPage.vue'
import ListCompanies from '@/pages/companies/ListPage.vue'
import CreateCompany from '@/pages/companies/CreatePage.vue'
import EditCompany from '@/pages/companies/EditPage.vue';
import Logout from '@/pages/LogoutPage.vue';
import {getValue} from '@/utils/localStorage';

const isAuthenticated = () => {
    return !!getValue('token');
};

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresAuth: false },
        beforeEnter: () => {
            return !isAuthenticated()
        },
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
        meta: { requiresAuth: false },
        beforeEnter: () => {
            return !isAuthenticated()
        },
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
        meta: { requiresAuth: true },
        beforeEnter: () => {
            return isAuthenticated()
        },
    },
    {
        path: '/companies/:id',
        name: 'EditCompany',
        component: EditCompany,
        meta: { requiresAuth: true },
        beforeEnter: () => {
            return isAuthenticated()
        },
    },
    {
        path: '/companies',
        component: ListCompanies,
        name: 'ListCompanies',
        meta: { requiresAuth: true },
        beforeEnter: () => {
            return isAuthenticated()
        },
    },
    {
        path: '/companies/create',
        component: CreateCompany,
        name: 'CreateCompany',
        meta: { requiresAuth: true },
        beforeEnter: () => {
            return isAuthenticated()
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router