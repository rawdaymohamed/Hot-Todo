import { useInput } from '../hooks/useInput';
const NewTodoForm = () => {
  const [titleProps, resetTitle] = useInput('');
  const submitForm = (e) => {
    e.preventDefault();
    resetTitle('');
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
export default NewTodoForm;
