import React from 'react'
import moment from 'moment'
import api from './init'

export function listPages() {
  return api.get('/page_show').then(res => res.data).catch(error=>[])
}


export function createPages(payload) {
  return api.post(`/page/`, payload)
    .then(res => res.data)
  
}

export function putPages(pageID, payload) {
  return api.put(`/page/${pageID}`, payload)
    .then(res => res.data)
    .catch(err => alert(err))
  
}
