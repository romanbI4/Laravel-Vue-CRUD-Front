import client from '@/services/axios';
import router from "@/router";
import {setValue, removeValue} from '@/utils/localStorage';

export function login(credentials){
    return client()
        .post('/user/login', credentials)
        .then(response => {
            setValue("token", response.data.token);
            router.push('/companies');
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        })
        .finally(() => {
            this.submitted = false;
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
            this.submitted = false;
            this.loading = false;
        });
}

export function logout(){
    return client({requiresAuth: true})
        .post('/user/logout')
        .then((response) => {
            removeValue('token');
            router.push('/login');
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        }).finally(() => {
            this.submitted = false;
            this.loading = false;
        });
}