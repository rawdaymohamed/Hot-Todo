export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (title) => ({
  type: CREATE_TODO,
  payload: { title },
});
export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (title) => ({
  type: REMOVE_TODO,
  payload: { title },
});
