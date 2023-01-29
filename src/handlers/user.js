import UserService from '../services/user'
import { comparePassword, hashPassword, createJWT } from '../modules/auth'

export const createUser = async (req, res, next) => {
  const { name, surname, email, password } = req.body

  try{
    const user = await UserService.createUser({ 
      name, 
      surname, 
      email, 
      password: await hashPassword(password) 
    })

    const token =createJWT({ id: user._id, email: user.email })
    res.json({ token })
  } catch(err){
    return res.json({ error: err.message , description: 'Error creating user'})
  }
}