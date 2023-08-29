import axios from "axios";


const AUTH_REST_API_BASE_URI = 'http://localhost:8080/api/auth';

export const registeredAPICall =(registerObj)=> axios.post(AUTH_REST_API_BASE_URI+'/register',registerObj);


export const loginAPICall =(usernameOrEmail , password)=> axios.post(AUTH_REST_API_BASE_URI+'/login',{usernameOrEmail,password});