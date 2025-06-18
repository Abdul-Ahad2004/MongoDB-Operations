
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  email: { type: String, unique: true },
  active: Boolean,
});

export default mongoose.model('User', userSchema);
