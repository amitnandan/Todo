import axios from "axios";
import { getToken } from "./AuthService";

const REST_API_URI = 'http://localhost:8080/api/todos';

axios.interceptors.request.use(function (config) {
    
  config.headers['Authorization'] = getToken();

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//preflight contains meta data : 
//additional request which http method 
//used server inspact this and decide 
//whether the browser is allowed to send the request




export const getAllTodos = ()=> axios.get(REST_API_URI);


export const saveTodo = ( todo )=> axios.post(REST_API_URI , todo);
export const getTodoById = ( todoId )=> axios.get(REST_API_URI +'/'+ todoId);
export const updateTodo = ( id , todo )=> axios.put(REST_API_URI +'/'+ id , todo);

export const deleteTodo = (id )=> axios.delete(REST_API_URI +'/'+ id );



export const completeTodo = (id )=> axios.patch(REST_API_URI +'/'+ id + '/complete' );

export const inCompleteTodo = (id )=> axios.patch(REST_API_URI +'/'+ id + '/in-complete' );
