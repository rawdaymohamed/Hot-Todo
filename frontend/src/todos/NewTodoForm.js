import { useInput } from '../hooks/useInput';
const NewTodoForm = () => {
  const [titleProps, resetTitle] = useInput('');
  const submitForm = (e) => {
    e.preventDefault();
    resetTitle('');
  };
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <input
        type='text'
        {...titleProps}
        placeholder='Type your new todo here'
        required
      />
      <button type='submit'>Create Todo</button>
    </form>
  );
};
export default NewTodoForm;
