import React from 'react'
import moment from 'moment'
import api from './init'

export function listRoomsOfficial() {
  return api.get('/rooms_show').then(res => res.data)
}
