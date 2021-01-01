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
import SignInJourneyForm from './components/SignInJourneyForm'
import SignUpJourneyForm from './components/SignUpJourneyForm'
import DashBoard from './components/dynamic/ViewCalendar'
import EmailBlock from './components/dynamic/EmailBlock'
import PicPage from './components/dynamic/PicPage'
import OnePageHead from './components/dynamic/OnePageHeader'
import BraftEditor from 'braft-editor'

import meta from './components/head'
import { listPages,createJourneyPages,putJourneyPages } from './api/userpages'
import { getDecodedToken } from './api/token'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { agrs_Demo_OneGoAhead,agrs_Demo_CenterTextContent,agrs_Demo_CenterBanner,gen_component_n_editor, gen_component,agrs_Demo_OnePageHead, agrs_Demo_DashBoard,agrs_Demo_PicPage,agrs_Demo_EmailBlock,agrs_Demo_LeftPicRightWord,agrs_Demo_LeftInstaRightWord } from './helpers/page_element'

const md5 = require("md5")
class APP_JOURNI_EDIT extends Component {
  state = {
    decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    blocks: [],
    preblocks: [],
    page: [],
    roomData: null,
    eventDetail: [[" ",[" "]]],
    focus:null,
    pws:null,
    editorState:BraftEditor.createEditorState("請輸入內容或點擊右上角讀取內容")
  }
  updatedEvent = detailString => {
    this.setState(() => ({ eventDetail: detailString }))
  }

  onAdd_CenterBanner =(pageId)=>{
    this.state.blocks.push(agrs_Demo_CenterBanner)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})

  }
  onAdd_CenterTextContent =(pageId)=>{
    this.state.blocks.push(agrs_Demo_CenterTextContent)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
  }
  
  onAdd_header =(pageId)=>{
    this.state.blocks.push(agrs_Demo_OnePageHead)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
  }
  onAdd_Dashboard =(pageId)=>{
    this.state.blocks.push(agrs_Demo_DashBoard)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
    
  }
  onAdd_OneGoAhead =(pageId)=>{
    this.state.blocks.push(agrs_Demo_OneGoAhead)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
    
  }
  onAdd_PicPage =(pageId)=>{
    this.state.blocks.push(agrs_Demo_PicPage)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
  }
  onAdd_email =(pageId)=>{
    this.state.blocks.push(agrs_Demo_EmailBlock)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
  }
  onAdd_LeftPicRightWord =(pageId)=>{
    this.state.blocks.push(agrs_Demo_LeftPicRightWord)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
  }
  onAdd_LeftInstaRightWord =(pageId)=>{
    this.state.blocks.push(agrs_Demo_LeftInstaRightWord)
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
  }
  onlink_homepage =(userId)=>{
    window.location.href = `../../../${this.state.pws}`;
  }

  onSubmit =()=>{
    console.log(this.state.blocks)
  }

  onUpdateBlock =(index,pageId,block)=>{
    this.state.blocks[index] = block
    putJourneyPages(pageId,this.state.pws,this.state.blocks).then(res=>{this.setState({ blocks: this.state.blocks })})
    
  }
  onDeleteBlock =(index,pageId)=>{
    this.state.blocks.splice(index, 1);
    putJourneyPages(pageId,this.state.pws,this.state.blocks)
    this.setState({ blocks: this.state.blocks })
  }
  onMoveUpBlock =(index,pageId)=>{
    if(index!=0){

        let sourceBlock = this.state.blocks[index]
        let targetBlock = this.state.blocks[index-1]
        this.state.blocks[index-1] = sourceBlock
        this.state.blocks[index] = targetBlock

        putJourneyPages(pageId,this.state.pws,this.state.blocks)
        this.setState({ blocks: this.state.blocks,focus:null })

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

        putJourneyPages(pageId,this.state.pws,this.state.blocks)
        this.setState({ blocks: this.state.blocks,focus:null })

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

  onLogUp = ({ tag }) => {
      createJourneyPages({
        "page": [],
        "owner":tag
      })
      .then(res=>{
        if(res.data.error){
            alert("此標籤已註冊過")
        }
        else{
            alert("您的密碼為"+res.data._id)
            window.location.href = `../../../j/edit/${res.data._id}/${tag}/`;
        }
      })
  }
  onLogIn = ({ pws, id }) => {
      window.location.href = `../../../j/edit/${id}/${pws}/`;
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
        pws
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
                <Route path="/j/home" exact render={() =>
                  (<div className="wrapper__form">
                      <h2>新建旅程</h2>
                      <SignUpJourneyForm onSignUp={this.onLogUp} />
                      <h2>編輯已存在旅程</h2>
                      <SignInJourneyForm onSignIn={this.onLogIn} />
                    </div>
                  )} />
                <Route path="/j/edit/:userName/:pws/" exact render={(props) =>{
                  //
                  let userId = props.match.params.userName
                  let page = this.state.page
                  let blocks_convented = []
                  let pageId = null
                  //const userId = this.state.decodedToken? this.state.decodedToken.sub: null;
                  if(userId != null){
                  
                    //
                    console.log("/j/edit/:userName/ : page",page)
                    console.log("/j/edit/:userName/ : userId",userId)

                    let pws = props.match.params.pws
                    if(this.state.pws != pws){
                        this.setState({"pws":pws})
                    }
                    console.log("props.match.params.pws",this.state.pws)
                    console.log("/j/edit/:userName/ : pws",pws)
                    let userpage = filter_page(page,md5(pws))
                    let blocks = userpage.page ? userpage.page: []
                    if(this.state.blocks.toString() != blocks.toString()){
                        console.log("/j/edit/:userName/ : this.state.blocks ",this.state.blocks )
                        console.log("/j/edit/:userName/ : blocks ",blocks )
                        this.setState({"blocks":blocks})
                        this.load()
                    }
                    pageId = userpage.id
                    console.log("/j/edit/:userName/ : blocks", blocks)
                    console.log("/j/edit/:userName/ : userpage", userpage)



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
                        {(
                            <div>
                                <div className="ToolBar bkc-gray">
                                    <AddElementButton
                                      text={'新增欄位： 置中大字加上四個連結'}
                                      onClick={() => this.onAdd_header(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 大字置中按鈕'}
                                      onClick={() => this.onAdd_OneGoAhead(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 置中大字'}
                                      onClick={() => this.onAdd_CenterBanner(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 置中內文'}
                                      onClick={() => this.onAdd_CenterTextContent(pageId)}
                                    />
                                    <AddElementButton
                                      text={'新增欄位： 三欄圖片'}
                                      onClick={() => this.onAdd_PicPage(pageId)}
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
                                    <ul>
                                      <p>新增欄位會在最下方</p>
                                      <p>您的密碼為： {userId}</p>
                                      <p>切勿忘記，若遺失密碼將無法再次編輯此頁面，或可記得此永久網址</p>
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
    //
    listPages().then( page =>{
        console.log("App_journi_edit.js load: page",page)
        this.setState({ "page": page })
    })
  }

  // When the App first renders
  componentDidMount() {
    this.load()
  }

  // When state changes
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate State",this.state.blocks)
    console.log("componentDidUpdate preblocks",this.state.preblocks)
    if (!arraysEqual(this.state.blocks, this.state.preblocks)) {
        console.log("componentDidUpdate State1",this.state.blocks)
        console.log("componentDidUpdate preblocks",this.state.preblocks)
        this.setState({ "preblocks": Array.from(this.state.blocks) })
        this.load()
    }
  }

}




export default APP_JOURNI_EDIT


function filter_page(page,userName){
  console.log("journey filter_page:page", page)
  console.log("journey filter_page:userName", userName)
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
  console.log("journey filter_page:respond", respond)
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

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}