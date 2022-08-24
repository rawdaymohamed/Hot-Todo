import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { markTodoCompleted, removeTodo } from './actions';
const TodoList = ({ todos = [], onRemovePressed, markTodoCompleted }) => (
  <div>
    <NewTodoForm />
    {todos.map((todo, i) => (
      <TodoListItem
        todo={todo}
        key={i}
        onRemovePressed={onRemovePressed}
        markTodoCompleted={markTodoCompleted}
      />
    ))}
  </div>
);
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (title) => dispatch(removeTodo(title)),
  markTodoCompleted: (title) => dispatch(markTodoCompleted(title)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
