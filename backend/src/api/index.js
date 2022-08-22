import express from 'express';
const router = express.Router();
import { getTodo, getTodos, createTodo, deleteTodo, updateTodo } from './todos';
router.get('/', (req, res) => {
  res.status(200).json({ message: 'API works' });
});
router
  .get('/todos', getTodos)
  .get('/todos/:id', getTodo)
  .post('/todos/create', createTodo)
  .put('/todos/:id', updateTodo)
  .delete('/todos/:id', deleteTodo);
export default router;
