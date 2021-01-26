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
import BraftEditor from 'braft-editor'


import meta from './components/head'
import { listPages,listPagesByUid, createPages,putPages } from './api/userpages'
import { getDecodedToken, rememberToken } from './api/token'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { agrs_Demo_OneGoAhead,agrs_Demo_CenterTextContent,agrs_Demo_CenterBanner,gen_component_n_editor, gen_component,agrs_Demo_OnePageHead, agrs_Demo_DashBoard,agrs_Demo_PicPage,agrs_Demo_EmailBlock,agrs_Demo_LeftPicRightWord,agrs_Demo_LeftInstaRightWord } from './helpers/page_element'


class APP_HOME_EDIT extends Component {
  state = {
    decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    blocks: [],
    page: [],
    roomData: null,
    eventDetail: [[" ",[" "]]],
    focus:null,
    editorState:BraftEditor.createEditorState("請輸入內容或點擊右上角讀取內容")
  }
  updatedEvent = detailString => {
    this.setState(() => ({ eventDetail: detailString }))
  }

  onAdd_CenterBanner =(pageId)=>{
    this.state.blocks.push(agrs_Demo_CenterBanner)
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
  }
  onAdd_CenterTextContent =(pageId)=>{
    this.state.blocks.push(agrs_Demo_CenterTextContent)
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
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
  onAdd_OneGoAhead =(pageId)=>{
    this.state.blocks.push(agrs_Demo_OneGoAhead)
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
  onAdd_LeftPicRightWord =(pageId)=>{
    this.state.blocks.push(agrs_Demo_LeftPicRightWord)
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
  }
  onAdd_LeftInstaRightWord =(pageId)=>{
    this.state.blocks.push(agrs_Demo_LeftInstaRightWord)
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)
  }
  onlink_homepage =()=>{
    const userId = this.state.decodedToken? this.state.decodedToken.sub: null;
    console.log("this.state.decodedToken",this.state.decodedToken)
    window.location.href = `../p/${userId}`;
  }

  onlink_manager =()=>{
    const userId = this.state.decodedToken? this.state.decodedToken.sub: null;
    console.log("this.state.decodedToken",this.state.decodedToken)
    window.location.href = `../../login`;
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
  onDeleteBlock =(index,pageId)=>{
    this.state.blocks.splice(index, 1);
    this.setState({ blocks: this.state.blocks })
    putPages(pageId,this.state.blocks)

    // console.log("onUpdateBlock pageId", pageId)
    // console.log("onUpdateBlock index", index)
  }
  onMoveUpBlock =(index,pageId)=>{
    if(index!=0){

        let sourceBlock = this.state.blocks[index]
        let targetBlock = this.state.blocks[index-1]
        this.state.blocks[index-1] = sourceBlock
        this.state.blocks[index] = targetBlock
        this.setState({ blocks: this.state.blocks,focus:null })
        putPages(pageId,this.state.blocks)

    }
    else{
        alert("已到最上方")
    }
  }
  onMoveDownBlock =(index,pageId)=>{
    if(this.state.blocks.length > index+1){

        let sourceBlock = this.state.blocks[index]
        let targetBlock = this.state.blocks[index+1]
        this.state.blocks[index+1] = sourceBlock
        this.state.blocks[index] = targetBlock
        this.setState({ blocks: this.state.blocks,focus:null })
        putPages(pageId,this.state.blocks)

    }
    else{
        alert("已到最下方")
    }
  }
  //
  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }
  //
  onUpdateFocus = (index) => {
    this.setState({ focus:index })
  }
  //
  render() {
    const {
        roomData,
        page,
        eventDetail,
        decodedToken, // retrieves the token from local storage if valid, else will be null
        blocks,
        editorState,
        focus,
    } = this.state
    const signedIn = !!decodedToken
    const Loading = require('react-loading-animation')

    const featureParams = this.state.filterParams
    const date = this.state.currentDate
    
    


    // <AddElementButton
    //   text={'新增欄位： 置中大字'}
    //   onClick={() => this.onAdd_CenterBanner(pageId)}
    // />

    return (
      <Router>
        <div id="homeedit" className="App">
          <Fragment>
              <Switch>
                <Route path="/p/edit/" exact render={(props) =>{


                  
                  //
                  let blocks_convented = []
                  let pageId = null
                  const userId = this.state.decodedToken? this.state.decodedToken.sub: null;
                  console.log("this.state.decodedToken", this.state.decodedToken)
                  if(userId != null){
                  
                    //
                    let userpage = filter_page(page,userId)
                    let blocks = userpage.page ? userpage.page: []
                    pageId = userpage.id
                    console.log("userpage", userpage)



                    //
                    let add_agrs = {
                      "roomData":filter_room(roomData,userId),
                      "eventDetail":this.state.eventDetail,
                      "updatedEventDetail":this.updatedEvent,
                      "editorState":this.state.editorState,
                      "handleEditorChange": this.handleEditorChange,
                      "onUpdateBlock":this.onUpdateBlock,
                      "onDeleteBlock":this.onDeleteBlock,
                      "onUpdateFocus":this.onUpdateFocus,
                      "onMoveUpBlock":this.onMoveUpBlock,
                      "onMoveDownBlock":this.onMoveDownBlock,
                      "pageId":pageId,
                      "focus":this.state.focus
                    }

                    //
                    blocks.forEach((row_agr, i)=>{
                      blocks_convented.push(<li>{gen_component_n_editor({...add_agrs,...row_agr,index:i})}</li>)
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
                                <div className="ToolBar bkc-gray">
                                    <AddElementButton
                                      text={'新增欄位： 置中大字+四個連結'}
                                      onClick={() => this.onAdd_header(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 置中大字+一個連結'}
                                      onClick={() => this.onAdd_OneGoAhead(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 置中內文'}
                                      onClick={() => this.onAdd_CenterTextContent(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 行事曆'}
                                      onClick={() => this.onAdd_Dashboard(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 三欄圖片'}
                                      onClick={() => this.onAdd_PicPage(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 三個電子信箱聯絡按鈕'}
                                      onClick={() => this.onAdd_email(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 左圖右字'}
                                      onClick={() => this.onAdd_LeftPicRightWord(pageId)}
                                    />

                                    <AddElementButton
                                      text={'新增欄位： Instagram嵌入與文字說明'}
                                      onClick={() => this.onAdd_LeftInstaRightWord(pageId)}
                                    />
                                    
                                    <AddElementButton
                                      text={'前往個人頁面'}
                                      onClick={this.onlink_homepage}
                                    />
                                    <AddElementButton
                                      text={'返回管理後台'}
                                      onClick={this.onlink_manager}
                                    />
                                    <ul>
                                      <p>新增欄位會在最下方</p>
                                    </ul>
                                </div>

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
    const userId = this.state.decodedToken? this.state.decodedToken.sub: null;

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
    if(userId!=null){
      listPagesByUid(userId).then( page =>{
        this.setState({ "page": page })
  
        //
  
        const userId = this.state.decodedToken? this.state.decodedToken.sub: null;
        this.state.blocks = filter_page(page,userId).page
  
        //
        if(userId != null && !this.state.blocks){
          let init_blocks = [agrs_Demo_OnePageHead, agrs_Demo_DashBoard,agrs_Demo_PicPage,agrs_Demo_EmailBlock]
          createPages({
            owner: userId,
            page: init_blocks
          })
          listPagesByUid(userId).then( page =>{
            this.setState({ "page": page })
          })
        }
  
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