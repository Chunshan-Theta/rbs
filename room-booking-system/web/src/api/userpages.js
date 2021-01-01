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

export function createJourneyPages(payload) {
  return api.post(`/j/page`, payload)
    .then(res => res)

}
export function putJourneyPages(pageID,pws, payload) {
  console.log("putJourneyPages: pageID",pageID)
  console.log("putJourneyPages: pws",pws)
  console.log("putJourneyPages: payload",payload)
  return api.put(`/j/page/${pageID}/${pws}`, payload)
    .then(res => {
        console.log("putJourneyPages: res.data",res.data)
        return(res.data)
    })

}
