import express from "express";
import { createTodo, deleteTodo, completedTodo, getTodos, updateTodo, getSingleTodo, getCompletedTodos, deleteCompletedTodo } from "../controllers/todosControllers.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/completed", getCompletedTodos);
router.get("/:id", getSingleTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.delete("/completed/:id", deleteCompletedTodo);
router.post("/completed/:id", completedTodo);

export default router;