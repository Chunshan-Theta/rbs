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
import { listRoomsOfficial } from './api/rooms_official'
import AddElementButton from './components/EditHomePage'
import BookingForm from './components/BookingForm'
import Button from './components/Button'
import FilterElement from './components/FilterElement'
import Footer from './components/Footer'
import Key from './components/Key'
import MyBookings from './components/MyBookings'
import NavBar from './components/NavBar'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import DashBoard from './components/dynamic/ViewCalendar'
import EmailBlock from './components/dynamic/EmailBlock'
import PicPage from './components/dynamic/PicPage'
import OnePageHead from './components/dynamic/OnePageHeader'


import meta from './components/head'

import { listPages,createPages,putPages } from './api/userpages'
import { getDecodedToken } from './api/token'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { gen_component_n_editor, gen_component,agrs_Demo_OnePageHead, agrs_Demo_DashBoard,agrs_Demo_PicPage,agrs_Demo_EmailBlock } from './helpers/page_element'


class APP_HOME_EDIT extends Component {
  state = {
    decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    blocks: [],
    page: [],
    roomData: null,
    eventDetail: [[" ",[" "]]],
  }
  updatedEvent = detailString => {
    this.setState(() => ({ eventDetail: detailString }))
  }

  onAdd_header =()=>{
    this.state.blocks.push(agrs_Demo_OnePageHead)
    this.setState({ blocks: this.state.blocks })
  }
  onAdd_Dashboard =()=>{
    this.state.blocks.push(agrs_Demo_DashBoard)
    this.setState({ blocks: this.state.blocks })
  }
  onAdd_PicPage =()=>{
    this.state.blocks.push(agrs_Demo_PicPage)
    this.setState({ blocks: this.state.blocks })
  }
  onAdd_email =()=>{
    this.state.blocks.push(agrs_Demo_EmailBlock)
    this.setState({ blocks: this.state.blocks })
  }

  onSubmit =()=>{
    console.log(this.state.blocks)
  }

  onUpdateBlock =(index,pageId,block)=>{
    this.state.blocks[index] = block
    this.setState({ blocks: this.state.blocks })
    // console.log("onUpdateBlock blocks", this.state.blocks)
    // console.log("onUpdateBlock pageId", pageId)
    putPages(pageId,this.state.blocks)
    
  }


  //
  render() {
    const {
        roomData,
        page,
        eventDetail,
        decodedToken, // retrieves the token from local storage if valid, else will be null
        blocks,
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
                <Route path="/p/edit/" exact render={(props) =>{


                  
                  //
                  let blocks_convented = []
                  const userId = this.state.decodedToken? this.state.decodedToken.sub: null;
                  if(userId != null){
                  
                    //
                    let userpage = filter_page(page,userId)
                    let blocks = userpage.page ? userpage.page: []
                    let pageId = userpage.id
                    console.log("userpage", userpage)



                    //
                    let add_agrs = {
                      "roomData":filter_room(roomData,userId),
                      "eventDetail":this.state.eventDetail,
                      "updatedEventDetail":this.updatedEvent
                    }

                    //
                    blocks.forEach((row_agr, i)=>{
                      blocks_convented.push(<li>{gen_component_n_editor({...add_agrs,...row_agr,index:i,pageId,onUpdateBlock:this.onUpdateBlock})}</li>)
                    })
                    
                  }else{
                    alert("尚未登入")
                    console.log("props",this.props)
                    window.location.href = "../../login";
                  }
                  return(
                    <DocumentMeta {...meta("Edit")}>
                    <Fragment>
                        { decodedToken &&(
                            <div>
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
                            </div>)}
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
         console.log("listRoomsOfficial data:",rooms)
         this.setState({ roomData: rooms})
         this.setState({ loading: false })
        })
        .catch(error => {
         console.error('Error loading room data', error)
         this.setState({ error })
    })
    listPages().then( page =>{
      this.setState({ "page": page })

      //

      const userId = this.state.decodedToken? this.state.decodedToken.sub: null;
      this.state.blocks = filter_page(page,userId).page

      //
      if(userId != null && this.state.blocks.length==0){
        let init_blocks = [agrs_Demo_OnePageHead, agrs_Demo_DashBoard,agrs_Demo_PicPage,agrs_Demo_EmailBlock]
        createPages({
          owner: userId,
          page: init_blocks
        })
        listPages().then( page =>{
          this.setState({ "page": page })
        })
      }

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


function filter_page(page,userName){
  console.log("page", page)
  let respond = {}
  page.forEach(p => 
    {

      if(p.owner == userName){
        respond = {
          page: p.page,
          id: p._id
        }
      }
    }
  )
  
  return respond
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
    console.log("filter_room roomData", roomData)
    console.log("filter_roomData",filter_roomData)
    return filter_roomData
}