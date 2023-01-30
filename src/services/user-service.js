import BaseService  from "./base-service.js"
import User from "../models/user.js"

class UserService extends BaseService {
  async createUser(user) {
    return await this.insert(user)
  }

  async getUserByEmail(email) {
    return await this.findByProperty("email", email)
  }

  async getUserById(id) {
    return await this.findByProperty("_id", id)
  }
}

export default new UserService(User)