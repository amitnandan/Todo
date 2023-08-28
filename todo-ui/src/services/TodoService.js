import axios from "axios";

const REST_API_URI = 'http://localhost:8080/api/todos';

export const getAllTodos = ()=> axios.get(REST_API_URI);


export const saveTodo = ( todo )=> axios.post(REST_API_URI , todo);
export const getTodoById = ( todoId )=> axios.get(REST_API_URI +'/'+ todoId);
export const updateTodo = ( id , todo )=> axios.put(REST_API_URI +'/'+ id , todo);

export const deleteTodo = ( id  )=> axios.delete(REST_API_URI +'/'+ id );
