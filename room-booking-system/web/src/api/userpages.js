import React from 'react'
import moment from 'moment'
import api from './init'

export function listPages(keyword=null) {
  if(keyword!=null){
    return api.get('/page_show?keyword='+keyword).then(res => res.data).catch(error=>[])
  }else{
    return api.get('/page_show').then(res => res.data).catch(error=>[])
  }
}
export function listJourPages(keyword=null,skip,limit) {
  if(keyword!=null){
    return api.get('/journi_show?keyword='+keyword+'&skip='+skip+'&limit='+limit).then(res => res.data).catch(error=>[])
  }else{
    return api.get('/journi_show?skip='+skip+'&limit='+limit).then(res => res.data).catch(error=>[])
  }
}

export function listJourTags(tags) {
    return api.get('/journi_show?tags='+tags).then(res => res.data).catch(error=>[])

}

export function listPagesByTagAndPid(tag,pid) {
  var url = '/page_show?tag='+tag+'&pid='+pid
  return api.get(url).then(res => res.data).catch(error=>[])
}
export function listPagesByUid(uid) {
  var url = '/page_show?user='+uid
  return api.get(url).then(res => res.data).catch(error=>[])
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
