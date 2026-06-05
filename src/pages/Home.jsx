import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import{FaEdit} from 'react-icons/fa'
import { MdDeleteForever } from "react-icons/md";

function Home({todo, SetTodo, todos, setTodos, showFinished, setshowFinished}) {
    const handleSave = () => {
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
    <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-3 md:p-5 bg-slate-900 text-white bg-gradient-to-r from-black-500 via-white-500 to-red-700 min-h-[80vh] md:w-1/2">
      <h1 className="font-bold text-center text-xl bg-gradient-to-r from-black-500 via-white-900 to-red-700">fasTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Add a Todo</h2>
            <input 
              onChange={handleChange} 
              value={todo} 
              type="text" 
              className="w-full px-5 py-1 rounded-full 2px border-solid bg-white text-black" 
            />
            <button 
              onClick={handleSave} 
              disabled={todo.length < 3} 
              className="bg-violet-800 p-2 py-1 disabled:bg-violet-600 text-white rounded-md font-bold">
                Save
            </button>
        </div>
        <input 
          className="my-4 mr-2" 
          onChange={toggleFinished} 
          type="checkbox" 
          checked={showFinished} 
        /> 
           Show Finished

        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && 
            <div 
              className="m-5 font-extrabold">
              No Todos to display
            </div>
          }

          {todos.map(item => {

          return (showFinished || !item.isCompleted) && 
          <div 
            key={item.id} 
            className="todo flex flex-row justify-between items-center md:w-full my-3 gap-2 overflow-hidden"
          >
            <div className="flex gap-2 items-center min-w-0 flex-1">
              <input 
                onChange={handleCheckbox} 
                type="checkbox" 
                name={item.id} 
                checked={item.isCompleted} 
              />
            <div className={`${item.isCompleted? "line-through" : ""} max-w-[150px] sm:max-w-xs md:max-w-md lg:max-w-lg break-words min-w-0`}>
              {item.todo}
            </div>
            </div>

            <div className="buttons flex gap-1 md:gap-2 flex-shrink-0">
              <button 
                onClick={() => handleEdit(item.id)} 
                className="bg-violet-800 p-1 md:p-2 md:py-1 text-white rounded-md mx-0.5 md:mx-1 font-bold text-sm md:text-base"
              >
              <FaEdit />
              </button>

              <button 
                onClick={() => handleDelete(item.id)} 
                className="bg-violet-800 p-1 md:p-2 md:py-1 text-white rounded-md mx-0.5 md:mx-1 font-bold text-sm md:text-base"
              >
              <MdDeleteForever />
              </button>
            </div>

          </div>
        })}
        </div>


    </div>
  )
}

export default Home
