import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '21bc6095557045b2a00b75e73fc033ea'
    }
})