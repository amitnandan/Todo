import React, { useState } from 'react'
import { loginAPICall } from '../services/AuthService';
import {useNavigate} from 'react-router-dom'
const LoginComponent = () => {

   const[username ,setUsername] = useState('')
   const[password,setPassword] = useState('')

  const navigate =  useNavigate();

    function handleLoginForm(e){
        e.preventDefault();

        loginAPICall(username,password).then((response)=>{
            console.log(response.data);
            navigate('/todos');

        }).catch((error=>console.error(error)))
    }

  return (
    <div className='container'>
        <br/>
        <br/>
        <div className='row'>
            <div className='col-md-6 offset-md-3 '>

                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'>LOGIN Form</h2>
                        
                    </div>
                
                    <div className='card-body'>
                            <form>
                                
                                <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Username or Email</label>
                                <div className='col-md-9'>
                                    <input 
                                    type='text'
                                    placeholder='Enter Username'
                                    name='username'
                                    className='form-control'
                                    value={username}
                                    onChange ={(e)=>setUsername(e.target.value)}
                                    >
                                    </input>

                                </div>
                                </div>

                                <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Password</label>
                                <div className='col-md-9'>
                                    <input 
                                    type='password'
                                    placeholder='Enter Password'
                                    name='password'
                                    className='form-control'
                                    value={password}
                                    onChange ={(e)=>setPassword(e.target.value)}
                                    >
                                    </input>

                                </div>
                                </div>

                                <div className='form-group mb-3'>
                                    <button
                                        className='btn btn-primary'
                                        onClick={(e)=>handleLoginForm(e)}
                                    >Submit</button>

                                </div>


                            </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LoginComponent;