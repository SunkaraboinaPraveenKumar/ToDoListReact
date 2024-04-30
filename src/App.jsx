import React, { useState } from 'react'
import Form from './Form'
import ToDos from './ToDos'
const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:'This is a brand new Title 1',
      description:'This is a brand new description'
    },
    {
      id:2,
      title:'This is a brand new Title 2',
      description:'This is a brand new description'
    },
    {
      id:3,
      title:'This is a brand new Title 3',
      description:'This is a brand new description'
    },
    {
      id:4,
      title:'This is a brand new Title 4',
      description:'This is a brand new description'
    },
  ])
  const [id,setId]=useState("");
  // console.log("This is id = ",id);
  const deleteToDo=(id)=>{
    setTodos(todos.filter((d)=>d.id!==id));
  }
  return (
    <>
    <div className="container">
      <h1 className='text-center'>React To do List CRUD App </h1>
      {/* <button className='btn btn-danger' onClick={()=>deleteToDo(2)}>test delete</button> */}
      <Form 
      id={id}
      setId={setId}
      todos={todos}
      setTodos={setTodos}  />
      <ToDos setId={setId} todos={todos} deleteToDo={deleteToDo} />
    </div>
    </>
  )
}

export default App