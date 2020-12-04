const mongoose = require('./init')
const Schema = mongoose.Schema

const UserPageSchema = new Schema({
  page: Array,
  owner: String,
})

const UserPage = (module.exports = mongoose.model('UserPage', UserPageSchema))

