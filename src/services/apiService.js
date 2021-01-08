import axios from 'axios'
import config from '../config';

const SIGNUP_URL = `http://localhost:5000/api/v1/users/signup`
const TOKEN_URL = `http://localhost:5000/api/v1/users/token`
const ORDER_URL = `http://localhost:5000/api/v1/users/order`


const GET_USER_URL = id => `http://localhost:5000/api/v1/users/${id}`


export const getUser = (id) => axios.get(GET_USER_URL(id))
export const createUser = (data) => axios.post(SIGNUP_URL, data)
export const getToken = (amount, url) => axios.get(TOKEN_URL, { params: { amount, url } })
export const createOrder = (data) => axios.post(ORDER_URL, data)