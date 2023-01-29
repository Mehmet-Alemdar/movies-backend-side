import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String, required: true},
  director: { type: String, required: true},
  image: { type: String, required: true},
})

module.exports = mongoose.model('Movie', MovieSchema)
