import { PenSquareIcon, Trash2Icon, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useTodos } from "../hooks/useTodos";

const TaskCard = ({ todo, setTodos }) => {
  const navigate = useNavigate();
  const { title, description } = todo;

  const {handleDelete} = useTodos();
  
  const handleComplete = async (e, id) => {
    e.preventDefault(); 

    if (!window.confirm("Are you sure you want to mark this todo as complete?")) return;

    try {
      await api.post(`/todos/completed/${id}`, { 
        title,
        description,
      });

      setTodos((prev) => 
        prev.filter((todo) => todo._id !== id)
      );

      toast.success("Todo marked as complete");
      navigate("/completed");
    } catch (error) {
      console.log("Error in handleComplete", error);
      toast.error("Failed to mark todo as complete");
    }
  };

  return (
    <Link
      to={`/todo/${todo._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{todo.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{todo.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(todo.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => { 
                e.preventDefault(); 
                handleDelete(todo._id, setTodos); 
              }}
            >
            <Trash2Icon className="size-4" />
            </button>

            <button
              className="btn btn-ghost btn-xs text-success"
              onClick={(e) => handleComplete(e, todo._id)}
            >
             <Check className="size-5"/>
            </button>
            
          </div>
          
        </div>
      </div>
    </Link>
  );
};
export default TaskCard;