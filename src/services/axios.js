import axios from 'axios';
import { getValue } from '@/utils/localStorage';

export default ({ requiresAuth = false } = {}) => {
    const options = {};

    options.baseURL = '/api';

    if (requiresAuth) {
        options.headers = {
            'Authorization': 'Bearer ' + getValue('token'),
        };
    }

    return axios.create(options);
};