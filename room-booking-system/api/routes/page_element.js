const express = require('express')
const UserPage = require('../models/Page_Element')
const { requireJWT } = require('../middleware/auth')
const { delete_column } = require('../models/toolkit')
const mongoose = require('mongoose')

const router = new express.Router()
const md5 =require("md5");

router.get('/page_show', (req, res) => {
  var tag = req.query.tag ? req.query.tag : null;
  var owner = req.query.user ? req.query.user : null;
  var pid = req.query.pid ? req.query.pid : null;
  var keyword = req.query.keyword ? req.query.keyword : null;
  var payload = {}
  if(tag != null){
    payload["owner"] = md5(tag)
  }
  if(owner != null){
    payload["owner"] = owner
  }
  if(keyword != null){
    payload["page"] = { $regex: keyword, $options: 'i' }
  }
  if(pid != null){
    if(pid.length != 24){
      payload["_id"] = null
    }else{
      payload["_id"] = mongoose.Types.ObjectId(pid)
    }
    
  }
  UserPage.find(payload)
    .then(page => {
      page.forEach(p=>{
        if(owner == null){
          delete_column(p, ["_id"])
        }
      })
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
  var blocks = body

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

//
router.post('/j/page', (req, res) => {
  const body =req.body
  body['tag'] = body['owner']
  body['owner'] = md5(body['owner'])
  UserPage.find({'owner':body['owner']})
  .then(result=>{
     if(result.length==0){
        console.log("req.body",req.body)
        UserPage.create(req.body)
        .then(page => {
          res.status(201).json(page)
        })
        .catch(error => {
          res.status(400).json({ error })
        })
     }else{
        res.status(209).json({"error":"此標籤已註冊過"})
     }
  })

})


router.put('/j/page/:id/:pws', (req, res) => {
  const { id,pws } = req.params
  const { body } = req
  const md5_pws = md5(pws)
  console.log("/j/page/:id/:pws body",body)
  console.log("/j/page/:id/:pws id",id)
  console.log("/j/page/:id/:pws pws",md5_pws)
  UserPage.findOneAndUpdate(
    {"_id":id,"owner":md5_pws},
    {
      $set: {
        page: body
      }
    },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(room => {
      console.log("/j/page/:id/:room",room)
      res.status(200).json(room)
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})


module.exports = router


//
function html_strip(html) {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}