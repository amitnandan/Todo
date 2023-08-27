import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../services/TodoService'
import { useNavigate } from 'react-router-dom'

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

  return (
    <div className='container'>
        <h1 className='text-center'> List Of Todo's</h1>
        <button className='btn btn-primary mb-2'
            onClick={addNewTodo}
        >Add TODO</button>
        <div>
            <table className='table table-bordered table-stripped'>
                <thead>
                    <tr>
                        <th>TODO title</th>
                        <th>TODO Description</th>
                        <th>TODO Completed</th>
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
