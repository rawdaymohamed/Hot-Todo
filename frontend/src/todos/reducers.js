import { CREATE_TODO, REMOVE_TODO } from './actions';
export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { title } = payload;
      const newTodo = {
        title,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { title } = payload;
      return state.filter((todo) => todo.title !== title);
    }
    default:
      return state;
  }
};
