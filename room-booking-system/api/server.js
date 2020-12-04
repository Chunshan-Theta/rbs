if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')

const config = require('./config')

const server = express()

// Middleware
server.use(bodyParser.json())
server.use(cors({ credentials: true }))
server.use(authMiddleware.initialize)

// sample handler
server.get('/test', function (req, res, next) {
  res.status(200).json({"status":"ok"});
});

// Routes
server.use([require('./routes/auth'), require('./routes/rooms'), require('./routes/page_element')])

// Error handling
server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

// Read port and host from the configuration file
// server.listen(config.port, config.host, error => {
//   if (error) {
//     console.error('Error starting', error)
//   } else {
//     console.info('Express listening on port ', config.port)
//   }
// })
console.log("listening...", config.port);

server.listen(config.port)