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
export const MARK_TODO_COMPLETED = 'MARK_TODO_COMPLETED';
export const markTodoCompleted = (title) => ({
  type: MARK_TODO_COMPLETED,
  payload: { title },
});
