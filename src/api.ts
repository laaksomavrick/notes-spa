import axios from 'axios';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const url = (route: string) => `${process.env.VUE_APP_API_HOST}/${route}`;

export const get = (route: string) => {
    return axios.get(url(route));
};

export const post = (route: string, payload: object) => {
    return axios.post(url(route), payload);
};

export const patch = (route: string, payload: object) => {
    return axios.patch(url(route), payload);
};

export const destroy = (route: string, id: string) => {
    return axios.delete(`${url(route)}/${id}`);
};
