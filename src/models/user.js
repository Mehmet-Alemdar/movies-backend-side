import mongoose from "mongoose"
import mongooseAutoPopulate from "mongoose-autopopulate"

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2},
  surname: { type: String, required: true, minLength: 2},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true, minLength: 3},
})

UserSchema.plugin(mongooseAutoPopulate)

export default mongoose.model('User', UserSchema)