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

import AddElementButton from './components/EditHomePage'
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
import { listPages } from './api/userpages'
import { listRoomsOfficial } from './api/rooms_official'
import { getDecodedToken } from './api/token'
import { makeBooking, deleteBooking, updateStateRoom } from './api/booking'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { initialRoom } from './helpers/rooms'
import { gen_component,agrs_Demo_OnePageHead, agrs_Demo_DashBoard,agrs_Demo_PicPage,agrs_Demo_EmailBlock } from './helpers/page_element'


class APP_HOME_EDIT extends Component {
  state = {
    decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    blocks: []
  }

  onAdd_header =()=>{
    console.log(this.state.blocks)
    this.state.blocks.push(agrs_Demo_OnePageHead)
    console.log(this.state.blocks)
    this.setState({ blocks: this.state.blocks })
  }
  onAdd_Dashboard =()=>{
    console.log(this.state.blocks)
    this.state.blocks.push(agrs_Demo_DashBoard)
    console.log(this.state.blocks)
    this.setState({ blocks: this.state.blocks })
  }
  onAdd_PicPage =()=>{
    console.log(this.state.blocks)
    this.state.blocks.push(agrs_Demo_PicPage)
    console.log(this.state.blocks)
    this.setState({ blocks: this.state.blocks })
  }
  onAdd_email =()=>{
    console.log(this.state.blocks)
    this.state.blocks.push(agrs_Demo_EmailBlock)
    console.log(this.state.blocks)
    this.setState({ blocks: this.state.blocks })
  }

  //
  render() {
    const {
      decodedToken, // retrieves the token from local storage if valid, else will be null
      blocks
    } = this.state
    const signedIn = !!decodedToken
    const Loading = require('react-loading-animation')

    const featureParams = this.state.filterParams
    const date = this.state.currentDate
    


    return (
      <Router>
        <div id="homeedit" className="App">
          <Fragment>
              <Switch>
                <Route path="/p/edit/:userName" exact render={(props) =>{
                  const userName = props.match.params.userName;
                  let blocks_convented = []
                  this.state.blocks.forEach(row_agr=>{
                    blocks_convented.push(<li>{gen_component({...row_agr})}</li>)
                  })
                  return(
                    <DocumentMeta {...meta("Edit")}>
                     <Fragment>
                        <AddElementButton
                          text={'add header'}
                          onClick={this.onAdd_header}
                        />
                        <AddElementButton
                          text={'add Dashboard'}
                          onClick={this.onAdd_Dashboard}
                        />
                        <AddElementButton
                          text={'add PicPage'}
                          onClick={this.onAdd_PicPage}
                        />
                        <AddElementButton
                          text={'add email'}
                          onClick={this.onAdd_email}
                        />
                        <ul className="one_page">
                          {blocks_convented}
                        </ul>
                     </Fragment></DocumentMeta>)
                }} />
            </Switch>
          </Fragment>
        </div>
      </Router>
    )
  }

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
    this.load()
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




export default APP_HOME_EDIT
