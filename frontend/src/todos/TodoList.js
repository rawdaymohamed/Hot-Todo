import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
const TodoList = ({ todos = [{ title: 'hello' }] }) => (
  <div>
    {todos.map((todo) => (
      <TodoListItem todo={todo} key={todo._id} />
    ))}
    <NewTodoForm />
  </div>
);
export default TodoList;
