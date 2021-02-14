import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './css/style.css'
//
import './css/sass/styles.css'
import './css/sass/event.css'
import './css/sass/month.css'
import './css/sass/reset.css'
import './css/sass/time-column.css'
import './css/sass/time-grid.css'
import './css/sass/toolbar.css'
import './css/sass/variables.css'
import DocumentMeta from 'react-document-meta';
import moment from 'moment'

import BookingForm from './components/BookingForm'
import Button from './components/Button'
import FilterElement from './components/FilterElement'
import Footer from './components/Footer'
import Key from './components/Key'
import MyBookings from './components/MyBookings'
import NavBar from './components/NavBar'
import RoomsList from './components/RoomsList'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import DashBoard from './components/dynamic/ViewCalendar'
import EmailBlock from './components/dynamic/EmailBlock'
import PicPage from './components/dynamic/PicPage'
import OnePageHead from './components/dynamic/OnePageHeader'
import meta from './components/head'

import { listOfficeRooms } from './api/rooms'
import { listPages,listJourTags } from './api/userpages'
import { listRoomsOfficial } from './api/rooms_official'
import { getDecodedToken } from './api/token'
import { makeBooking, deleteBooking, updateStateRoom } from './api/booking'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { initialRoom } from './helpers/rooms'
import { gen_component } from './helpers/page_element'
import NavBar_Bottom from './components/NavBar_Bottom'

const md5 = require("md5")

class APP_V2_HOME extends Component {
  state = {
    decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    roomData: null,
    floorParam: 'all',
    error: null,
    eventDetail: [[" ",[" "]]],
    page: []
  }

  updatedEvent = detailString => {
    this.setState(() => ({ eventDetail: detailString }))
  }

  //
  render() {
    const {
      decodedToken, // retrieves the token from local storage if valid, else will be null
      roomData,
      floorParam,
      error,
      page,
      eventDetail,
      loading
    } = this.state
    const signedIn = !!decodedToken
    const Loading = require('react-loading-animation')

    const featureParams = this.state.filterParams
    const date = this.state.currentDate
    


    return (
      <Router>
        <div id="app_v2" className="App">
          <Fragment>
              <Switch>
                <Route path="/" exact render={() => (<Redirect to="/discover" />)} />
                <Route path="/p" exact render={() =>
                    (
                        <Redirect to="/p/5f5ee77c8ffb507c3b3011ec" />
                    )}
                />
                <Route path="/p/dodo-space/" exact render={() =>
                    (
                        <Redirect to="/p/5f5ee77c8ffb507c3b3011ec" />
                    )}
                />
                <Route path="/p/dodo-space/calendar_view" exact render={() =>
                    (
                        <Redirect to="/p/5f5ee77c8ffb507c3b3011ec" />
                    )}
                />
                <Route path="/j/:pws" exact render={(props) =>{
                      //
                      this.init_page()

                      //
                      this.fetch_page_from_db(props.match.params.pws)
                      
                      //
                      let owner = md5(props.match.params.pws)
                      let add_agrs = {
                        "roomData":filter_room(roomData,owner),
                        "eventDetail":this.state.eventDetail,
                        "updatedEventDetail":this.updatedEvent
                      }
                      /*Todo: patch from Mongodb */
                      //let blocks =[agrs_OnePageHead,agrs_PicPage,agrs_DashBoard,agrs_EmailBlock]
                      let blocks = filter_page(page,owner)
                      let blocks_convented = []
                      blocks.forEach(row_agr=>{
                        blocks_convented.push(<li>{gen_component({...row_agr,...add_agrs})}</li>)
                      })
                      return(
                         <Fragment>
                         {  !roomData && loading &&
                            (
                                <div className="loading_animation">
                                    <Loading />
                                </div>
                            )
                         }
                         { roomData &&
                            (
                                <DocumentMeta {...meta("ThetaCity")}>

                                    <ul className="one_page">
                                      {/* <li>
                                          <h1>Hey！ {props.match.params.userName}</h1>
                                      </li> */}
                                      {blocks_convented}
                                    </ul>
                                    <NavBar_Bottom/>
                                </DocumentMeta>
                            )
                         }
                         </Fragment>)}
                } />
                <Route path="/p/:userName" exact render={(props) =>{

                  //
                  this.init_page()
                  
                  let add_agrs = {
                    "roomData":filter_room(roomData,props.match.params.userName),
                    "eventDetail":this.state.eventDetail,
                    "updatedEventDetail":this.updatedEvent
                  }
                  /*Todo: patch from Mongodb */
                  //let blocks =[agrs_OnePageHead,agrs_PicPage,agrs_DashBoard,agrs_EmailBlock]
                  let blocks = filter_page(page,props.match.params.userName)
                  let blocks_convented = []
                  blocks.forEach(row_agr=>{
                    blocks_convented.push(<li>{gen_component({...row_agr,...add_agrs})}</li>)
                  })
                  return(
                     <Fragment>
                     {  !roomData && loading &&
                        (
                            <div className="loading_animation">
                                <Loading />
                            </div>
                        )
                     }
                     { roomData &&
                        (
                            <DocumentMeta {...meta("ThetaCity")}>
                                
                                <ul className="one_page">
                                  {/* <li>
                                      <h1>Hey！ {props.match.params.userName}</h1>
                                  </li> */}
                                  {blocks_convented}
                                </ul>
                            </DocumentMeta>
                        )
                     }
                     </Fragment>)}
                } />
            </Switch>
          </Fragment>
        </div>
      </Router>
    )
  }
  init_page(){
    if(this.state.roomData==null){
      this.setState({"roomData": []})
      this.load()
    }
  }


  //
  fetch_page_from_db(tag){
    var a = listJourTags(tag)
    a.then(page=>{
        this.setState({"page": page})
    })
  }

  //
  load() {
    const { decodedToken } = this.state
    const signedIn = !!decodedToken


    // display loading page
    this.setState({ loading: true })
    // load all of the rooms from the database
    listRoomsOfficial()
      .then(rooms => {
        this.setState({ roomData: rooms})
        this.setState({ loading: false })
      })
      .catch(error => {
        console.error('Error loading room data', error)
        this.setState({ error })
      })
      listPages().then( page =>{
        this.setState({ "page": page })
      })
    
  }

  // When the App first renders
  componentDidMount() {
    //this.load()
  }

  // When state changes
  componentDidUpdate(prevProps, prevState) {
    // If just signed in, signed up, or signed out,
    // then the token will have changed
    if (this.state.decodedToken !== prevState.decodedToken) {
      this.load()
    }
  }

}


function filter_room(roomData,userName){
    roomData = roomData?roomData:[]
    let filter_roomData = []
    roomData.forEach(room => 
      {

        if(room.owner == userName){
          filter_roomData.push(room)
        }
      }
    )
    console.log("filter_room userName", userName)
    console.log("roomData", roomData)
    console.log("filter_roomData",filter_roomData)
    return filter_roomData
}

function filter_page(page,userName){
  console.log("page", page)
  let filter_page = []
  page.forEach(p => 
    {

      if(p.owner == userName){
        filter_page = p.page
      }
    }
  )
  
  return filter_page
}

export default APP_V2_HOME
