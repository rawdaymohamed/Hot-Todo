import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
const TodoList = ({ todos = [{ title: 'hello' }] }) => (
  <div>
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} key={todo._id} />
    ))}
  </div>
);
export default TodoList;
