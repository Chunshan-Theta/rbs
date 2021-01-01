const mongoose = require('./init')
const Schema = mongoose.Schema

const UserPageSchema = new Schema({
  page: Array,
  owner: { type: String, unique : true, required : true, dropDups: true },
})

const UserPage = (module.exports = mongoose.model('UserPage', UserPageSchema))

