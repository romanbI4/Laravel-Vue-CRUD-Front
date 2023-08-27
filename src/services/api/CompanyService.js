import client from '@/services/axios';

export default class CompanyService {

    static getList = async () => {
        return await client({requiresAuth: true}).get('/user/companies');
    }

    static getById = async (id) => {
        return await client({requiresAuth: true}).get(`/user/companies/${id}`);
    }

    static deleteByid = async (id) => {
        return await client({requiresAuth: true}).delete(`/user/companies/${id}`);
    }

    static updateById = async (id, data) => {
        return await client({requiresAuth: true}).put(`/user/companies/${id}`, data);
    }

    static create = async (data) => {
        return await client({requiresAuth: true}).post('/user/companies', data);
    }
}