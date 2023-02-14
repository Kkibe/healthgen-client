import axios from "axios";
//const TOKEN = localStorage.getItem('persist:root') ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken : '';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken : '';
const BASE_URL = 'https://healthgen-api.onrender.com/api';
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});
