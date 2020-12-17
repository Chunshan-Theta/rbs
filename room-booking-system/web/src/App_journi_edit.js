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


class APP_JOURNI_EDIT extends Component {
  state = {
    blocks: [],
    page: [],
    roomData: null,
    eventDetail: [[" ",[" "]]],
  }
  updatedEvent = detailString => {
    this.setState(() => ({ eventDetail: detailString }))
  }

  onAdd_header =(pageId)=>{
    this.state.blocks.push(agrs_Demo_OnePageHead)
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
  }
  onAdd_Dashboard =(pageId)=>{
    this.state.blocks.push(agrs_Demo_DashBoard)
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
    
  }
  onAdd_PicPage =(pageId)=>{
    this.state.blocks.push(agrs_Demo_PicPage)
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
  }
  onAdd_email =(pageId)=>{
    this.state.blocks.push(agrs_Demo_EmailBlock)
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
  }

  onSubmit =()=>{
    console.log(this.state.blocks)
  }

  onUpdateBlock =(index,pageId,block)=>{
    this.state.blocks[index] = block
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
    
  }
  onDeleteBlock =(index,pageId)=>{
    this.state.blocks.splice(index, 1);
    this.setState({ blocks: this.state.blocks })
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
        <div id="journi_edit" className="App">
          <Fragment>
              <Switch>
                <Route path="/j/edit/:pageId" exact render={(props) =>{}}/>
                <Route path="/j/edit/" exact render={(props) =>{
                  
                  //
                  let blocks_convented = []
                  let pageId = "props.match.params.pageId"
                  // console.log("journi_edit pageId",pageId)
                  //
                  // let unit_page = filter_page(page, pageId)
                  // let blocks = unit_page.page ? unit_page.page: []
                  // console.log("userpage", userpage)

                  //
                  // blocks.forEach((row_agr, i)=>{
                  //   blocks_convented.push(<li>{gen_component_n_editor({...row_agr,index:i,pageId,onUpdateBlock:this.onUpdateBlock,onDeleteBlock:this.onDeleteBlock})}</li>)
                  // })
                  
                  
                  return(
                    <DocumentMeta {...meta("Edit")}>
                    <Fragment>
                        { decodedToken &&(
                            <div>

                                <AddElementButton
                                  text={'新增欄位： header'}
                                  onClick={() => this.onAdd_header(pageId)}
                                />
                                <AddElementButton
                                  text={'新增欄位： PicPage'}
                                  onClick={() => this.onAdd_PicPage(pageId)}
                                />
                                <AddElementButton
                                  text={'新增欄位： email'}
                                  onClick={() => this.onAdd_email(pageId)}
                                />
                                <ul>
                                  <p>新增欄位會在最下方</p>
                                </ul>


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


    // display loading page
    this.setState({ loading: true })
    
    // 
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




export default APP_JOURNI_EDIT


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