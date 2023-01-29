import BaseService  from "./base-service.js"
import User from "../models/user.js"

class UserService extends BaseService {
  async createUser(user) {
    return await this.insert(user)
  }

  async getUserByEmail(email) {
    return await this.findByProperty("email", email)
  }
}

export default new UserService(User)