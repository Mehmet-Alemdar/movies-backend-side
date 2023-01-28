import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 2},
  surname: { type: String, required: true, minLength: 2},
  email: { type: String, required: true},
  password: { type: String, required: true, minLength: 3}
})

UserSchema.plugin(import('mongoose-autopopulate'))

module.exports = mongoose.model('User', UserSchema)