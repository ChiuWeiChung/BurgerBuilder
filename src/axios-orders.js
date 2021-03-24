import axios from 'axios';
import dbURL from './dbURL';


const instance = axios.create({
    baseURL: dbURL
})

const reqInterceptor =instance.interceptors.request.use(req => {
    return req
}, err => {
    return Promise.reject(err);
});

const resInterceptor=instance.interceptors.response.use(res => {
    return res;
}, err => {
    // console.log(err.message)
    return Promise.reject(err);
    // throw new Error(err);
})

export default {instance,reqInterceptor,resInterceptor};