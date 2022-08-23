const TodoListItem = ({ todo }) => {
  return (
    <div className='card w-100 lg:mx-20 mx-10 my-5 bg-primary text-primary-content'>
      <div class='card-body'>
        <h2 class='card-title'>{todo.title}</h2>

        <div class='card-actions justify-end'>
          <button class='btn'>Mark as completed</button>
          <button class='btn'>Remove</button>
        </div>
      </div>
    </div>
  );
};
export default TodoListItem;
