import { getAllTodos, createTodo, updateTodo, deleteTodo } from "../models/todo.model.js";

export const getTodos = (req, res) => {
  try {
    res.status(200).json(getAllTodos());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addTodo = (req, res) => {
  try {
    const title = req.query.title;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const newTodo = createTodo(title);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTodoById = async (req, res) => {
  try {
    const id = req.params.id; // URL id
    const completed = req.query.completed === "true"; // boolean

    const todo = updateTodo(id, { completed }); // update model
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteTodoById = (req, res) => {
  try {
    const id = req.params.id;
    const todo = deleteTodo(id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
