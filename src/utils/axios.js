import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://139.144.180.200:3000',
})

instance.interceptors.request.use(config=>{
    config.headers.Authorization  =`Bearer ${window.localStorage.getItem('token')}`

    return config
})

export default instance