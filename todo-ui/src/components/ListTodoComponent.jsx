import React, { useEffect, useState } from 'react'
import { completeTodo,inCompleteTodo, deleteTodo, getAllTodos } from '../services/TodoService'
import { useNavigate } from 'react-router-dom'
import { isAdminUser } from '../services/AuthService'

const ListTodoComponent = () => {


const[ todos , setTodo ] = useState([])
const navigate = useNavigate();
//whenever we want to make a ajax call or rest api call we can use useEffect hook
useEffect(
    ()=>{
        ListTodos();
    },[])


   function ListTodos(){

    getAllTodos().then((response)=>{
        setTodo(response.data);
        console.log(response.data);
    }).catch(error=>console.error(error))

   } 


   function addNewTodo(){
        navigate('/add-todos');
   }

   function updateTodo(id){
    console.log(id);
    navigate(`/update-todo/${id}`);
   }

   function deletefunc(id){
    deleteTodo(id).then((response)=>{
        ListTodos();

    }).catch(error=>console.error(error));

   }


   function markCompleteTodo(id){
     completeTodo(id).then((response)=>{
        ListTodos();
    }).catch(error=>console.error(error));

   }

   
   function markInCompleteTodo(id){
    inCompleteTodo(id).then((response)=>{
       ListTodos();
   }).catch(error=>console.error(error));

  }


  const isAdmin = isAdminUser();

  return (
    <div className='container'>
        <h1 className='text-center'> List Of Todo's</h1>
        
        {
            isAdmin && <button className='btn btn-primary mb-2'
                        onClick={addNewTodo}
                    >Add TODO</button>
                    
        }
        
        
        <div>
            <table className='table table-bordered table-stripped'>
                <thead>
                    <tr>
                        <th>TODO title</th>
                        <th>TODO Description</th>
                        <th>TODO Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            todos.map(
                                (todo)=>

                                    <tr key={todo.id}>
                                            
                                            <td>{todo.title}</td>


                                            <td>{todo.description}</td>


                                            <td>{todo.completed ? 'YES':'NO'}</td>
                                            <td>
                                                {
                                                    isAdmin && 
                                                    <button className='btn btn-info'
                                                            onClick={()=>updateTodo(todo.id)}
                                                    > Update</button>
                                                }
                                                 {
                                                    isAdmin && 
                                                    
                                                <button className='btn btn-danger'
                                                style={ { marginLeft : "15px" } }
                                                onClick={()=>deletefunc(todo.id)}
                                        > Delete</button>
                                                }


                                                <button className='btn btn-success'
                                                        style={ { marginLeft : "15px" } }
                                                        onClick={()=>markCompleteTodo(todo.id)}
                                                > Complete</button>

                                                <button className='btn btn-danger'
                                                        style={ { marginLeft : "15px" } }
                                                        onClick={()=>markInCompleteTodo(todo.id)}
                                                > In-Complete</button>





                                            </td>

                                    </tr>
                                    
                                

                        )

                        }
                </tbody>



            </table>
        </div>

    </div>
  )
}

export default ListTodoComponent











//     const dummy = 
//     [
//      {
//         "id":1,
//         "title":"Spring",
//         "description":"Learn Spring Boot",
//         "completed": false
//     },
//     {
//         "id":2,
//         "title":"Hibernate",
//         "description":"Learn Hibernate",
//         "completed": false
//     },
//     {
//         "id":3,
//         "title":"Data",
//         "description":"Learn Spring Data JPA",
//         "completed": true
//     }
// ]
