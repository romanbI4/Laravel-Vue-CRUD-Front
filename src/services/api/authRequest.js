import client from '@/services/axios';
import router from "@/router";

const storage = require('@/utils/localStorage');

export function login(credentials){
    return client()
        .post('/user/login', credentials)
        .then(response => {
            storage.set("token", response.data.token);
            router.push('/companies');
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        })
        .finally(() => {
            this.loading = false;
        });
}

export function register(data){
    return client()
        .post('/user/register', data)
        .then((response) => {
            router.push('/login');
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        })
        .finally(() => {
            this.loading = false;
        });
}

export function logout(){
    return client({requiresAuth: true})
        .post('/user/logout')
        .then((response) => {
            localStorage.removeItem('token');
            router.push('/login');
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        }).finally(() => {
            this.loading = false;
        });
}