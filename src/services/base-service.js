class BaseService {
  constructor(model) {
    this.model = model
  }

  save(objects) {
    return this.model.insertMany(objects)
  }

  load() {
    return this.model.find()
  }

  async insert(object) {
    return await this.model.create(object)
  }

  async update(id, object) {
    return await this.model.findByIdAndUpdate(id, object)
  }

  async findById(id) {
    return this.model.findById(id)
  }
}