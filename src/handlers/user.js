import UserService from '../services/user-service.js'
import { comparePassword, hashPassword, createJWT } from '../modules/auth.js'

export const createUser = async (req, res, next) => {
  const { name, surname, email, password } = req.body

  try{
    const user ={ 
      name, 
      surname, 
      email, 
      password: await hashPassword(password)
    }

    const newUser = await UserService.createUser(user)

    const token = createJWT({ id: newUser._id, email: newUser.email })

    res.json({ token })
  } catch(err){
    return res.json({ error: err.message , description: 'Error creating user'})
  }
}

export const signin = async (req, res, next) => {
  const user = await UserService.getUserByEmail(req.body.email)
  if(!user) return res.json({ error: 'User not found' })

  const isValid = await comparePassword(req.body.password, user.password)
  if(!isValid) return res.json({ error: 'Invalid password' })

  const token = createJWT({ id: user._id, email: user.email })
  res.json({ token, id: user._id })
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.load()
    res.json(users)
  }catch(err){
    return res.json({ error: err.message , description: 'Error getting users'})
  }
}

export const getUser = async (req, res) => {
  const { id } = req.params
  try{
    const user = await UserService.getUserById(id)
    res.json(user)
  }catch(err){
    return res.json({ error: err.message , description: 'Error getting user'})
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const updatedUser = req.body
  
  try{
    const user = await UserService.update(id, updatedUser)
    res.json(user)
  }catch(err){
    return res.json({ error: err.message , description: 'Error updating user'})
  }
}

