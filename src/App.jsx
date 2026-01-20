// import './App.css'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import Navbar from "./componets/Navbar"


function App() {

  const [todo,SetTodo] = useState("")
  const [todos,setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...todos, {id : uuidv4(), todo, isCompleted: false}])
    SetTodo("")
  }


  const handleEdit = (id) => {
    const t = todos.find(item => item.id === id)
    SetTodo(t.todo)
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  
 
  const handleChange = (e) => {
    SetTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    console.log(newTodos,todos)
    
  }
  


  return (
    <>
    <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-xl font-bold">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-1/2 bg-amber-50" />
          <button onClick={handleAdd} className="bg-violet-800 p-2 py-1 text-white rounded-md mx-5 font-bold">Add</button>
        </div>

        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map(item => {
          return <div key={todo.id} className="todo flex w-1/4 my-3 justify-between">
            <input onChange={handleCheckbox} type="checkbox" name={item.id} value={item.isCompleted} id="" />
            <div className={item.isCompleted? "line-through" : ""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={() => handleEdit(item.id)} className="bg-violet-800 p-2 py-1 text-white rounded-md mx-1 font-bold">Edit</button>
              <button onClick={()=> handleDelete(item.id)} className="bg-violet-800 p-2 py-1 text-white rounded-md mx-1 font-bold">Delete</button>
        </div>

          </div>
          })}
        </div>


    </div>
    </>
  )
}

export default App
