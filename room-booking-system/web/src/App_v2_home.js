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

    const featureParams = this.state.filterParams
    const date = this.state.currentDate



    return (
      <Router>
        <div id="app_v2" className="App">
          <Fragment>
              <Switch>

                <Route path="/test/:userName" exact render={(props) =>
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
                            <DocumentMeta {...meta("DoDo Space")}>
                                
                                <ul className="one_page">
                                  <li>
                                      <h1>Hey！ {props.match.params.userName}</h1>
                                  </li>
                                  <li>
                                      {gen_component(agrs_OnePageHead)}
                                  </li>
                                  <li>
                                      {gen_component(agrs_PicPage)}
                                  </li>
                                　<li>
                                  
                                  {gen_component({
                                    "component_type":"DashBoard",
                                    "roomData":filter_room(roomData,props.match.params.userName),
                                    "eventDetail":this.state.eventDetail,
                                    "updatedEventDetail":this.updatedEvent
                                  })}
                                  </li>
                                　<li>
                                      {gen_component(agrs_EmailBlock)}
                                  </li>
                                </ul>
                            </DocumentMeta>
                        )
                     }
                     </Fragment>
                } />
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
    console.log("filter_roomData",filter_roomData)
    return filter_roomData
}

function gen_component(data){
  let component_type = data['component_type']? data['component_type']: null;
  console.log("data",data)
  switch(component_type){
      case "OnePageHead":
          return OnePageHead(data)
          break;
      case "PicPage":
          return PicPage(data)
          break;
      case "DashBoard":
        return DashBoard(data)
        break;

      case "EmailBlock":
        console.log("EmailBlock(data)",data)
        return EmailBlock(data)
        break;
          
      default:
          return(<h1>Not Fount Component!</h1>)
  }

  
}

const agrs_OnePageHead = {
  "component_type":"OnePageHead",
	"title": "多一個空間",
	"sub_titile": "下午茶 ｜ 桌上遊戲 ｜ 電影觀賞",
	"btn1":{
		"text": "本月活動",
		"url": "#event"
	},
	"btn2":{
		"text": "多多看電影",
		"url": "https://ddm.com.tw/"
	},
	"btn3":{
		"text": "關於",
		"url": "#menu"
	},
	"btn4":{
		"text": "紛絲專頁",
		"url": "https://www.facebook.com/onemoreplace2019/"
	}
}
const agrs_PicPage = {
  "component_type":"PicPage",
	"title": "關於 多一個空間",
	"sub_titile": "好吃，好玩，好開心",
	"col1":{
		"text": "三兩好友，最佳戰友",
		"url": "https://static.accupass.com/eventintro/2010181959479011781510.jpg"
	},
	"col2":{
		"text": "喝咖啡？不如揪個團",
		"url": "https://static.accupass.com/eventintro/2010181947321953973068.jpg"
	},
	"col3":{
		"text": "週末假日的最佳選擇",
		"url": "https://static.accupass.com/eventintro/2010181948187978925800.jpg"
	}
}

const agrs_EmailBlock = {
  "component_type":"EmailBlock",
	"title": "聯絡方式",
	"sub_titile": "想做點什麼呢？",
	"ml1":{
    "text": "預約空間用餐",
    "mail":"ddm.cooperation@gmail.com",
    "subject":"我想預約空間用餐",
    "body":"我想預約預約空間用餐%0D%0A姓名：%0D%0A時間：%0D%0A人數："
	},
	"ml2":{
    "text": "預約空間舉辦活動",
    "mail":"ddm.cooperation@gmail.com",
    "subject":"我想預約空間舉辦活動",
    "body":"我想預約空間舉辦活動%0D%0A姓名：%0D%0A時間：%0D%0A人數："
	},
	"ml3":{
    "text": "參加桌遊活動",
    "mail":"ddm.cooperation@gmail.com",
    "subject":"我想參加桌遊活動",
    "body":"我想預參加桌遊活動%0D%0A姓名：%0D%0A時間：%0D%0A人數："
	}
}

export default APP_V2_HOME
