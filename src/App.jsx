// import './App.css'
import { useState ,useEffect} from "react"
import { v4 as uuidv4 } from 'uuid'
import Navbar from "./componets/Navbar"
import{FaEdit} from 'react-icons/fa'
import { MdDeleteForever } from "react-icons/md";



function App() {

  const [todo,SetTodo] = useState("")
  const [todos,setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      try{
        let savedTodos = JSON.parse(todoString)
        setTodos(savedTodos)

      }catch(error){
        console.error("Invalid todos in localstorage",error)
      }
    }
    
    
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  
//  const saveToLocal = () => {
//     localStorage.setItem('todos',JSON.stringify(todos))
//   }
 
  

  const handleAdd = () => {
    setTodos([...todos, {id : uuidv4(), todo, isCompleted: false}])
    SetTodo("")
    // saveToLocal()
  }


  const handleEdit = (id) => {
    let t = todos.find(item => item.id === id)
    SetTodo(t.todo)
    setTodos(todos.filter(item => item.id !== id))
    // saveToLocal()
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id))
    // saveToLocal()
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
    // saveToLocal()
    
  }

  const toggleFinished = () => {
    setshowFinished (prev => !prev) 
  }
  


  return (
    <>
    <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
      <h1 className="font-bold text-center text-xl">fasTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-xl font-bold">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="w-full px-5 py-1 rounded-full 2px border-solid bg-white" />
          <button onClick={handleAdd} disabled={todo.length < 3} className="bg-violet-800 p-2 py-1 disabled:bg-violet-600 text-white rounded-md font-bold">Save</button>
        </div>
        <input className="my-4" onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5 font-extrabold">No Todos to display</div>}
          {todos.map(item => {

          return (!showFinished || item.isCompleted) && 
          <div key={item.id} 
          className="todo flex md:w-1/2 my-3 justify-between items-center"
          >
            <div className="flex gap-5 items-center flex-1">
            <input onChange={handleCheckbox} 
            type="checkbox" 
            name={item.id} 
            checked={item.isCompleted} 
            />
            <div className={item.isCompleted? "line-through" : ""}>
              {item.todo}
            </div>
            </div>

            <div className="buttons flex">
              <button onClick={() => handleEdit(item.id)} 
              className="bg-violet-800 p-2 py-1 text-white rounded-md mx-1 font-bold"
              >
              <FaEdit />
              </button>

              <button onClick={() => handleDelete(item.id)} 
              className="bg-violet-800 p-2 py-1 text-white rounded-md mx-1 font-bold"
              >
              <MdDeleteForever />
              </button>
            </div>

          </div>
          })}
        </div>


    </div>
    </>
  )
}

export default App
