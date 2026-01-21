export let todos = [];

export const getAllTodos = () => todos;

export const createTodo = (title) => {
  const newTodo = {
    id: Date.now(),      
    title: title,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodo = (id, data) => {
  const todoId = Number(id); // convert URL id to number

  const todo = todos.find(t => Number(t.id) === todoId); // force number comparison
  if (!todo) return null;

  if (data.title !== undefined) todo.title = data.title;
  if (data.completed !== undefined) todo.completed = data.completed;

  return todo;
};


export const deleteTodo = (id) => {
  const todoId = Number(id);
  const index = todos.findIndex(t => t.id === todoId);
  if (index === -1) return null;

  const deleted = todos.splice(index, 1)[0];
  return deleted;
};
