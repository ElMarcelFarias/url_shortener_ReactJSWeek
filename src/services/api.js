
import axios from "axios";

export const key = "367faeb01ccd17b36bf97effaae50dd1c4ca3da6"

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers:{
    'Authorization': `Bearer ${key}`
  }
})

export default api;