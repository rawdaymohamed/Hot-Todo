const TodoListItem = ({ todo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <button>Mark as completed</button>
      <button>Remove</button>
    </div>
  );
};
export default TodoListItem;
