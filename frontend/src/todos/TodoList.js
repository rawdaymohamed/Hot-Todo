import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo } from './actions';
const TodoList = ({ todos = [], onRemovePressed }) => (
  <div>
    <NewTodoForm />
    {todos.map((todo, i) => (
      <TodoListItem todo={todo} key={i} onRemovePressed={onRemovePressed} />
    ))}
  </div>
);
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (title) => dispatch(removeTodo(title)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
