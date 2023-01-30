import MovieService from '../services/movie-service.js'

export const CreateMovie = async (req, res) => {
  const { name, type, director, image } = req.body

  try {
    const newMovie = await MovieService.insert({ name, type, director, image })
    res.json(newMovie)
  } catch (err) {
    return res.json({ error: err.message, description: 'Error creating movie' })
  }
}

export const getAllMovies = async (req, res) => {
  try {
    const movies = await MovieService.load()
    res.json(movies)
  } catch (err) {
    return res.json({ error: err.message, description: 'Error getting movies' })
  }
}