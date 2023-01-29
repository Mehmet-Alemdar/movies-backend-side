import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const comparePassword =  (password, hash) => {
  return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5)
}

export const createJWT = (user) => {
  const token = jwt.sign({
    id: user.id,
    email: user.email
  }, process.env.JWT_SECRET)

  return token
}

export const protect = async (req, res, next) => {
  const brearer = req.headers.authorization

  if(!brearer) {
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }

  const[,token] = brearer.split(' ')

  if(!token) {
    res.status(401).json({
      message: 'Not valid token'
    })
    return
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()
  }catch(err) {
    res.status(401).json({
      message: 'Not valid token'
    })
    return 
  }
}