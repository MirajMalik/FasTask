import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitUI";
import { useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import TaskCard from "../components/TaskCard";
import TaskNotFound from "../components/TaskNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.get("/todos");
        // console.log("response:", res.data);
        setTodos(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching todos", error.response);

        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load todos");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen">

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading todos...</div>}

        {todos.length === 0 && !isRateLimited && <TaskNotFound />}

        {todos.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todos.map((todo) => (
              <TaskCard key={todo._id} todo={todo} setTodos={setTodos} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;