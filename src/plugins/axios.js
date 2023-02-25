import axios from 'axios'
import Cookies from 'js-cookie'
import $const from "@/utils/const";

const $http = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API_URL}`
})
$http.interceptors.request.use(
    config => {
        config.headers = {
            Authorization: `Bearer ${Cookies.get($const.TOKEN_KEY)}`,
            ...config.headers
        }
        return config
    },
    err => Promise.reject(err)
)
$http.interceptors.response.use(
    response => response,
    error => {
        let response = error.response
        if (!response) {
            return Promise.reject(error)
        }
        // handle error with response.status
        return Promise.reject(error)
    }
)
window.$http = $http
export default $http
