import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true},
  type: { type: String, required: true},
  director: { type: String, required: true},
  image: { type: String, required: true},
})

export default mongoose.model('Movie', MovieSchema)
