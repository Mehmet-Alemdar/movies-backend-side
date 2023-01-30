import { Router } from "express"

import { updateUser, getAllUsers, getUser } from "./handlers/user.js"
import { getAllMovies, CreateMovie } from "./handlers/movie.js"
const router = Router()

router.get("/user", getAllUsers)
router.get("/user/:id", getUser)
router.patch('/user/update/:id', updateUser)

router.get("/movie", getAllMovies)
router.post("/movie", CreateMovie)

export default router