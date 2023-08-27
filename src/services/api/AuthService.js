import client from '@/services/axios';

export default class AuthService {

    static login = async (credentials) => {
        return await client().post('/user/login', credentials);
    };

    static register = async (data) => {
        return await client().post('/user/register', data);
    };

    static logout = async () => {
        return await client({requiresAuth: true}).post('/user/logout');
    }
}