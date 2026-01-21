import express from "express";
import { getTodos, addTodo, updateTodoById, deleteTodoById } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/todos", getTodos);                      // list all todos
router.get("/todos/add", addTodo);                   // add todo via query param
router.get("/todos/update/:id", updateTodoById);     // update completed
router.get("/todos/delete/:id", deleteTodoById);     // delete todo

export default router;
