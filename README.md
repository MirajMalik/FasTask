# FasTask - A todo app for smart task management


fasTask is a simple and clean **Todo Management Application** built with **React**.  
It allows users to add, edit, delete, and mark tasks as completed, with data persisted using **Local Storage**.

---

## Features

-  Add new todos
-  Edit existing todos
-  Delete todos
-  Mark todos as completed
-  Toggle **Show Finished** to display only completed todos
-  Todos are saved in **Local Storage**
-  Responsive UI using Tailwind CSS
-  Icons powered by React Icons

---

## 🧠 How the App Works

- Todos are stored as objects with:
  ```js
  {
    id: uuid,
    todo: string,
    isCompleted: boolean
  }
