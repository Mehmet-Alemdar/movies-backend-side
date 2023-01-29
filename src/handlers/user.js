import UserService from '../services/user'
import { comparePassword, hashPassword, createJWT } from '../modules/auth'

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