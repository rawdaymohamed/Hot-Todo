import { useInput } from '../hooks/useInput';
import { connect } from 'react-redux';
import { createTodo } from './actions';
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [titleProps, resetTitle] = useInput('');
  const submitForm = (e) => {
    e.preventDefault();
    const isDuplicateTitle = todos.some(
      (todo) => todo.title === titleProps.value
    );
    if (!isDuplicateTitle) {
      onCreatePressed(titleProps.value);
      resetTitle('');
    }
  };
  return (
    <form onSubmit={(e) => submitForm(e)} className='m-5 text-center'>
      <input
        className='input input-bordered input-primary lg:w-full md:w-80 w-50 max-w-md m-2'
        type='text'
        {...titleProps}
        placeholder='Type your new todo here'
        required
      />
      <button className='btn btn-outline m-2' type='submit'>
        Create Todo
      </button>
    </form>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (title) => dispatch(createTodo(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
