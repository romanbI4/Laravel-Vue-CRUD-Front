import axios from 'axios';
import LocalStorage from '@/utils/localStorage';

export default ({ requiresAuth = false } = {}) => {
    const options = {};

    options.baseURL = '/api';

    if (requiresAuth) {
        options.headers = {
            'Authorization': 'Bearer ' + LocalStorage.getValue('token'),
        };
    }

    return axios.create(options);
};