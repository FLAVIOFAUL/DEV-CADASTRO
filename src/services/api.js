import axios from "axios"

const api = axios.create({

    baseURL: 'http://localhoste:3000'
})


export default api