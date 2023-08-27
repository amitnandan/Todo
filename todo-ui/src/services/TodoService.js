import axios from "axios";

const REST_API_URI = 'http://localhost:8080/api/todos';

export const getAllTodos = ()=> axios.get(REST_API_URI);