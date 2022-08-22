import { v4 } from 'uuid';
let todos = [
  {
    id: v4(),
    title: 'Learn Node.js',
    done: false,
  },
  {
    id: v4(),
    title: 'Learn React.js',
    done: true,
  },
  {
    id: v4(),
    title: 'Learn MERN Stack',
    done: false,
  },
];
export const getTodos = (req, res) => {
  res.status(200).json({ todos: todos });
};
export const getTodo = (req, res) => {
  const { id } = req.params;
  const todo = todos.filter((t) => t.id === id);
  res.status(200).json(todo);
};
export const createTodo = (req, res) => {
  const { title } = req.body;
  todos.push({ id: v4(), title, done: false });
  res.status(200).json({ todos: todos });
};
export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, done } = req.body;

  const updatedTodo = todos.filter((todo) => todo.id === id);
  todos = todos.map((t) => {
    if (t.id === id) return { id, title, done };
    else return t;
  });
  res.status(200).json(todos);
};
export const deleteTodo = (req, res) => {
  const { id } = req.params;
  const deletedTodo = todos.filter((todo) => todo.id === id);

  const deletedIndex = todos.indexOf(deleteTodo);
  todos.splice(deletedIndex, 1);
  res.status(200).json(todos);
};
