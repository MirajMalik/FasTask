import { useState ,useEffect} from "react"
// import { v4 as uuidv4 } from 'uuid'
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import TodoDetails from "./pages/TodoDetails";
import CompletedPage from "./pages/CompletedPage";



function App() {

  const [todo,SetTodo] = useState("")
  const [todos,setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      try{
        let savedTodos = JSON.parse(todoString)
        setTodos(savedTodos);

      }catch(error){
        console.error("Invalid todos in localstorage",error)
      }
    }
    
    
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home todo={todo} SetTodo={SetTodo} todos={todos} setTodos={setTodos} showFinished={showFinished} setshowFinished={setshowFinished} />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Routes>
    </>
  )
}

export default App
