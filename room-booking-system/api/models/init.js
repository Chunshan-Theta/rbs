const mongoose = require('mongoose')
console.log(process.env.MONGO_URI);
mongoose.Promise = global.Promise

var MONGO_URI = process.env.MONGO_URI || "mongodb://pythontest:pythontest@cluster0-shard-00-00.enocw.mongodb.net:27017,cluster0-shard-00-01.enocw.mongodb.net:27017,cluster0-shard-00-02.enocw.mongodb.net:27017/MongoDbToolCommonUnittest?ssl=true&replicaSet=atlas-qr78be-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

  .then(() => {
    console.log('Successfully connected to database',process.env.MONGO_URI)
  })

  .catch(error => {
    console.error('Error connecting to MongoDB database', error)
  })

module.exports = mongoose
