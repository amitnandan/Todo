import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoComponent from './components/TodoComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>

      <Routes>
        {/* //https://localhost:3000 */}
      <Route path='/' element={<ListTodoComponent/>}></Route>
           {/* //https://localhost:3000/todos */}
      <Route path='/todos' element={<ListTodoComponent/>}></Route>

      {/* //https://localhost:3000/add-todos */}
      <Route path='/add-todos' element={<TodoComponent/>}></Route>
   

      </Routes>


      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
