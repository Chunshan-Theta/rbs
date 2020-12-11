const express = require('express')
const UserPage = require('../models/Page_Element')
const { requireJWT } = require('../middleware/auth')
const router = new express.Router()

router.get('/page_show', (req, res) => {
  UserPage.find()
    .then(page => {
      res.json(page)
    })
    .catch(error => {
      res.json({ error })
    })
})

router.post('/page',requireJWT, (req, res) => {
  UserPage.create(req.body)
    .then(page => {
      res.status(201).json(page)
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})


router.put('/page/:id',requireJWT, (req, res) => {
  const { id } = req.params
  const { body } = req
  // console.log("body",body)
  // console.log("id",id)
  UserPage.findByIdAndUpdate(
    id,
    {
      $set: {
        page: body
      }
    },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(room => {
      res.status(200).json(room)
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})

module.exports = router
