import Todo from '../models/Todo';

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    console.log(todos);
    res.status(200).json({ todos: todos });
  } catch (error) {
    res.status(500).json({ message: 'Error getting todos' });
  }
};
export const getTodo = async (req, res) => {
  try {
    const data = await Todo.find({ _id: req.params.id });
    res.status(200).json({ todo: data });
  } catch (error) {
    res.status(500).json({ message: 'Error getting todo' });
  }
};
export const createTodo = async (req, res) => {
  try {
    const data = new Todo(req.body);
    await data.save();
    console.log(data);
    const todos = await Todo.find({});
    res.status(200).json({ todos: todos });
  } catch (error) {
    res.status(500).json({ message: 'Error creating the todos' });
  }
};
export const updateTodo = async (req, res) => {
  try {
    await Todo.findOneAndUpdate({ _id: req.params.id }, req.body);
    const allTodos = await Todo.find({});
    res.status(200).json({ todos: allTodos });
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo' });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    await Todo.remove({ _id: req.params.id });
    const todos = await Todo.find();
    res
      .status(200)
      .json({ message: 'Todo item was deleted successfully', todos: todos });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting todo' });
  }
};
