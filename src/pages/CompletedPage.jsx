import { useState, useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { formatDate } from "../lib/utils";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";
import { useTodos } from "../hooks/useTodos";

const CompletedPage = () => {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleDelete } = useTodos();

  useEffect(() => {
    const fetchCompleted = async () => {
      try {
        const res = await api.get("/todos/completed");
        setCompletedTodos(res.data);
      } catch (error) {
        console.error("Error fetching completed todos", error);
        toast.error("Failed to load completed tasks");
      } finally {
        setLoading(false);
      }
    };
    fetchCompleted();
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Todos
        </Link>
        
        <h2 className="text-3xl font-bold mb-8 text-primary">Completed Tasks</h2>
        
        {loading && <div className="text-center py-10">Loading completed tasks...</div>}
        
        {!loading && completedTodos.length === 0 && (
          <div className="text-center py-10 opacity-70">
            No completed tasks yet!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedTodos.map((task) => (
            <div key={task._id} className="card bg-base-100 shadow-md border-t-4 border-success opacity-80 hover:opacity-100 transition-all hover:shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-base-content">{task.title}</h3>
                <p className="text-base-content/70 line-clamp-3 line-through">{task.description}</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-base-content/10">
                  <div>
                    <span className="text-xs text-success font-semibold uppercase tracking-wider">Completed on</span>
                    <p className="text-sm text-base-content/80 mt-1">
                      {formatDate(new Date(task.createdAt))}
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn btn-ghost btn-xs text-error"
                      onClick={() => handleDelete(task._id, setCompletedTodos, "/todos/completed")}
                    >
                    <Trash2Icon className="size-4" />
                   </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
