import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://react-my-burger-d13a3-default-rtdb.firebaseio.com/',
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