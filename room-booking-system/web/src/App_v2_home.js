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
import DashBoard from './components/ViewCalendar'
import EmailBlock from './components/EmailBlock'
import PicPage from './components/PicPage'
import OnePageHead from './components/OnePageHeader'
import meta from './components/head'

import { listRooms } from './api/rooms'
import { listRoomsOfficial } from './api/rooms_official'
import { getDecodedToken } from './api/token'
import { makeBooking, deleteBooking, updateStateRoom } from './api/booking'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { initialRoom } from './helpers/rooms'

class APP_V2_HOME extends Component {
  state = {
    decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    roomData: null,
    floorParam: 'all',
    error: null,
    eventDetail: [[" ",[" "]]],
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
      eventDetail,
      loading
    } = this.state
    const signedIn = !!decodedToken
    const Loading = require('react-loading-animation')

    let filteredData = []
    const featureParams = this.state.filterParams
    const date = this.state.currentDate


    if (!!roomData) {
      filteredData = onFilterByFloor(floorParam, roomData)
    }

    return (
      <Router>
        <div id="app" className="App">
          <Fragment>
              <Switch>


                <Route path="/q1/" exact render={() =>
                     <OnePageHead/>
                } />
                <Route path="/q/:userName" component={Hello}/>


            </Switch>
          </Fragment>
        </div>
      </Router>
    )
  }

  load() {
    const { decodedToken } = this.state
    const signedIn = !!decodedToken

    if (signedIn) {
      // display loading page
      this.setState({ loading: true })
      // load all of the rooms from the database
      listRooms()
        .then(rooms => {
          this.setState({ roomData: rooms })
          // load the current user's bookings
          this.loadMyBookings()
          // the state's current room defaults to first room
          const room = this.state.roomData[0]
          this.setRoom(room._id)
          // toggle loading page off
          this.setState({ loading: false })
        })
        .catch(error => {
          console.error('Error loading room data', error)
          this.setState({ error })
        })
    }
    else{
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
    }
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
class Hello extends React.Component{
    render(){
        return <h1>Hello！{this.props.match.params.userName}！</h1>
    }
}
export default APP_V2_HOME
