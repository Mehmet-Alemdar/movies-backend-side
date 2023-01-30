import { Router } from "express"

import { updateUser, getAllUsers, getUser } from "./handlers/user.js"
const router = Router()

router.get("/user", getAllUsers)
router.get("/user/:id", getUser)
router.patch('/user/update/:id', updateUser)

export default router