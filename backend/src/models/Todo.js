import mongoose from 'mongoose';
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: false,
    default: false,
  },
});
export default mongoose.model('Todo', TodoSchema);
