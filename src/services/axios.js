import axios from 'axios';

const storage = require('@/utils/localStorage');

export default ({ requiresAuth = false } = {}) => {
    const options = {};

    options.baseURL = '/api';

    if (requiresAuth) {
        options.headers = {
            'Authorization': 'Bearer ' + storage.get('token'),
        };
    }

    return axios.create(options);
};