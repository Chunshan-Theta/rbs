import React from 'react'
import moment from 'moment'
import api from './init'

export function listPages() {
  return api.get('/page_show').then(res => res.data).catch(error=>[])
}
