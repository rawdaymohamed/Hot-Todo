import logo from './logo.svg';
import './App.css';
import TodoList from './todos/TodoList';

function App() {
  return (
    <>
      <h2 className='text-center text-2xl m-5'>Hot Todo</h2>
      <div className='divider px-20'></div>
      <TodoList />
    </>
  );
}

export default App;
