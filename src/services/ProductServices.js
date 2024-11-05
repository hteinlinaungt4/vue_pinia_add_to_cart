import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

export default {
  fetchProducts(limit) {
    return api.get('/products?_limit=' + limit)
  },
}
