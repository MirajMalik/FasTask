import api from "../lib/axios";
import toast from "react-hot-toast";


export const useTodos = () => {
  const handleDelete = async (id, setTodos, endpoint = "/todos") => {
    if (!window.confirm("Are you sure you want to delete this todo?")) return;
    try {
      await api.delete(`${endpoint}/${id}`);
      if (setTodos) {
        setTodos((prev) => prev.filter((todo) => todo._id !== id));
      }
      toast.success("Todo deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete todo");
    }
  };
    
  return { handleDelete };
}


