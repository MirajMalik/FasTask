import express from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todosControllers.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;