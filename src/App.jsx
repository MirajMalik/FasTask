// import './App.css'

import Navbar from "./componets/Navbar"

function App() {


  return (
    <>
    <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-xl font-bold">Add a Todo</h2>
          <input type="text" className="w-1/2 bg-amber-50" />
          <button className="bg-violet-800 p-2 py-1 text-white rounded-md mx-5 font-bold">Add</button>
        </div>

        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex bg-amber-500">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, maxime.</div>
            <div className="buttons">
              <button className="bg-violet-800 p-2 py-1 text-white rounded-md mx-1 font-bold">Edit</button>
              <button className="bg-violet-800 p-2 py-1 text-white rounded-md mx-1 font-bold">Delete</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
