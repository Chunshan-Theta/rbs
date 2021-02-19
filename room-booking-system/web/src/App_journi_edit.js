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
import { listPagesByTagAndPid, listPages, createJourneyPages, putJourneyPages } from './api/userpages'
import { getDecodedToken } from './api/token'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { agrs_Demo_PageInfo,agrs_Demo_TrafficRow, agrs_Demo_OneGoAhead, agrs_Demo_CenterTextContent, agrs_Demo_CenterBanner, gen_component_n_editor, gen_component, agrs_Demo_OnePageHead, agrs_Demo_DashBoard, agrs_Demo_PicPage, agrs_Demo_EmailBlock, agrs_Demo_LeftPicRightWord, agrs_Demo_LeftInstaRightWord } from './helpers/page_element'

//
import button_onegoahead from './assets/button_onegoahead.jpg'
import button_header from './assets/button_header.jpg'
import button_trafficrow from './assets/button_trafficrow.jpg'
import button_centertextcontent from './assets/button_centertextcontent.jpg'
import button_picpage from './assets/button_picpage.jpg'
import button_leftpicrightword from './assets/button_leftpicrightword.jpg'
import button_leftinstarightword from './assets/button_leftinstarightword.jpg'






//
const md5 = require("md5")
class APP_JOURNI_EDIT extends Component {
  state = {
    decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    blocks: [],
    preblocks: [],
    page: [],
    roomData: null,
    eventDetail: [[" ", [" "]]],
    focus: null,
    pws: null,
    loading: false,
    pageId: null,
    editorState: BraftEditor.createEditorState("請輸入內容或點擊右上角讀取內容")
  }
  updatedEvent = detailString => {
    this.setState(() => ({ eventDetail: detailString }))
  }
  refreash_page = (new_blocks) => {
    this.setState({ blocks: new_blocks },()=>{

      window.scrollTo(0,999999);
    })
    
  }

  onAdd_CenterBanner = (pageId) => {
    this.state.blocks.push(agrs_Demo_CenterBanner)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })

  }
  onAdd_CenterTextContent = (pageId) => {
    this.state.blocks.push(agrs_Demo_CenterTextContent)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })
  }
  onAdd_TrafficRow = (pageId) => {
    this.state.blocks.push(agrs_Demo_TrafficRow)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })
  }
  onAdd_header = (pageId) => {
    this.state.blocks.push(agrs_Demo_OnePageHead)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })
  }
  onAdd_Dashboard = (pageId) => {
    this.state.blocks.push(agrs_Demo_DashBoard)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })

  }
  onAdd_OneGoAhead = (pageId) => {
    this.state.blocks.push(agrs_Demo_OneGoAhead)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })

  }
  onAdd_PicPage = (pageId) => {
    this.state.blocks.push(agrs_Demo_PicPage)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })
  }
  onAdd_email = (pageId) => {
    this.state.blocks.push(agrs_Demo_EmailBlock)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })
  }
  onAdd_LeftPicRightWord = (pageId) => {
    this.state.blocks.push(agrs_Demo_LeftPicRightWord)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })
  }
  onAdd_PageInfo = (pageId) => {
    var blocks = [agrs_Demo_PageInfo]
    this.state.blocks = blocks.concat(this.state.blocks)
    
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => {
      this.setState({ blocks: this.state.blocks })
    })
  }
  onAdd_LeftInstaRightWord = (pageId) => {
    this.state.blocks.push(agrs_Demo_LeftInstaRightWord)
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.refreash_page(this.state.blocks) })
  }
  onlink_homepage = (userId) => {
    window.location.href = `../../../${this.state.pws}`;
  }

  onSubmit = () => {
    console.log(this.state.blocks)
  }

  onUpdateBlock = (index, pageId, block) => {
    this.state.blocks[index] = block
    putJourneyPages(pageId, this.state.pws, this.state.blocks).then(res => { this.setState({ blocks: this.state.blocks }) })

  }
  onDeleteBlock = (index, pageId) => {
    this.state.blocks.splice(index, 1);
    putJourneyPages(pageId, this.state.pws, this.state.blocks)
    this.setState({ blocks: this.state.blocks })
  }
  onMoveUpBlock = (index, pageId) => {
    if (index != 0 && this.state.blocks[index - 1].component_type!="PageInfo") {

      let sourceBlock = Object.assign({}, this.state.blocks[index])
      let targetBlock = Object.assign({}, this.state.blocks[index - 1])
      let newBlocks = Array.from(this.state.blocks)
      newBlocks[index - 1] = sourceBlock
      newBlocks[index] = targetBlock
      //this.setState({loading:true})
      putJourneyPages(pageId, this.state.pws, newBlocks).then(res => { this.setState({ blocks: newBlocks, focus: null, loading: false }) })



    }
    else {
      alert("已到最上方")
    }
  }
  onMoveDownBlock = (index, pageId) => {
    if (this.state.blocks.length > index + 1) {

      let sourceBlock = Object.assign({}, this.state.blocks[index])
      let targetBlock = Object.assign({}, this.state.blocks[index + 1])
      let newBlocks = Array.from(this.state.blocks)
      newBlocks[index + 1] = sourceBlock
      newBlocks[index] = targetBlock
      //this.setState({loading:true})
      putJourneyPages(pageId, this.state.pws, newBlocks).then(res => { this.setState({ blocks: newBlocks, focus: null, loading: false }) })


    }
    else {
      alert("已到最下方")
    }
  }
  //
  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }
  //
  onUpdateFocus = (index) => {
    this.setState({ focus: index })
  }

  onLogUp = ({ tag }) => {
    createJourneyPages({
      "page": [],
      "owner": tag
    })
      .then(res => {
        if (res.data.error) {
          alert("此標籤已註冊過")
        }
        else {
          alert("您的密碼為" + res.data._id)
          window.location.href = `../../../j/edit/${res.data._id}/${tag}/`;
        }
      })
  }
  onLogIn = ({ pws, id }) => {

    listPagesByTagAndPid(pws, id).then(page => {
      if (page.length>0) {
        window.location.href = `../../../j/edit/${id}/${pws}/`;
      }
      else {
        alert("查詢失敗，可能是輸入密碼錯誤或是沒有此標籤")
      }
    })

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
      pws,
      pageId,
      loading
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
              <Route path="/j/home" exact render={() =>
                (<div className="wrapper__form">
                  <h2>新建旅程</h2>
                  <SignUpJourneyForm onSignUp={this.onLogUp} />
                  <h2>編輯已存在旅程</h2>
                  <SignInJourneyForm onSignIn={this.onLogIn} />
                </div>
                )} />
              <Route path="/j/edit/:pageId/:pws/" exact render={(props) => {

                let page = this.state.page
                let blocks_convented = []
                let pageId = props.match.params.pageId //from pid
                let pws = props.match.params.pws //from tag
                
                
                if (this.state.pws != pws || this.state.pageId != pageId) {
                  listPagesByTagAndPid(pws, pageId).then(page => {
                    if (this.state.page != page) {
                      this.setState({ "page": page })
                    }
                    
                  })

                  //
                  this.setState({ "pws": pws,"pageId": pageId })
                }


                let userpage = filter_page(page, md5(pws))
                let blocks = userpage.page ? userpage.page : undefined
                if (blocks && this.state.blocks.toString() != blocks.toString()) {
                  this.setState({ "blocks": blocks })
                  this.load()
                }else if(blocks){
                    console.log("blocks",blocks)
                    //
                    let add_agrs = {
                      "roomData": filter_room(roomData, md5(pws)),
                      "eventDetail": this.state.eventDetail,
                      "updatedEventDetail": this.updatedEvent,
                      "editorState": this.state.editorState,
                      "handleEditorChange": this.handleEditorChange,
                      "onUpdateBlock": this.onUpdateBlock,
                      "onDeleteBlock": this.onDeleteBlock,
                      "onUpdateFocus": this.onUpdateFocus,
                      "onMoveUpBlock": this.onMoveUpBlock,
                      "onMoveDownBlock": this.onMoveDownBlock,
                      "pageId": pageId,
                      "focus": this.state.focus
                    }

                    //
                    if(this.state.blocks){
                      var PageInfoExist = false
                      this.state.blocks.forEach(ele=>{
                        if(ele.component_type=="PageInfo"){
                          PageInfoExist = true
                        }
                      })
                      if(!PageInfoExist){
                        this.onAdd_PageInfo(pageId)
                      }
                    }
                    

                    //
                    this.state.blocks.forEach((row_agr, i) => {
                      blocks_convented.push(<li>{gen_component_n_editor({ ...add_agrs, ...row_agr, index: i })}</li>)
                    })

                }



                

                return (
                  <DocumentMeta {...meta("Edit")}>
                    <Fragment>
                      {loading &&
                        (
                          <div className="loading_animation">
                            <Loading />
                          </div>
                        )
                      }
                      {!loading && (
                        <div>
                          <div className="toolbar bkc-gray">

                            <div className="row">
                            <AddElementButton
                              text={'新增欄位： 置中大字+四個連結'}
                              onClick={() => this.onAdd_header(pageId)}
                              backgroundimage={button_header}
                            />
                            <AddElementButton
                              text={'新增欄位： 大字置中+一個連結'}
                              onClick={() => this.onAdd_OneGoAhead(pageId)}
                              backgroundimage={button_onegoahead}
                            />
                            <AddElementButton
                              text={'新增欄位： 交通方式'}
                              onClick={() => this.onAdd_TrafficRow(pageId)}
                              backgroundimage={button_trafficrow}
                            />
                            <AddElementButton
                              text={'新增欄位： 置中內文'}
                              onClick={() => this.onAdd_CenterTextContent(pageId)}
                              backgroundimage={button_centertextcontent}
                            />
                            <AddElementButton
                              text={'新增欄位： 三欄圖片'}
                              onClick={() => this.onAdd_PicPage(pageId)}
                              backgroundimage={button_picpage}
                            />
                            <AddElementButton
                              text={'新增欄位： 左圖右字'}
                              onClick={() => this.onAdd_LeftPicRightWord(pageId)}
                              backgroundimage={button_leftpicrightword}
                            />

                            <AddElementButton
                              text={'新增欄位： Instagram嵌入與文字說明'}
                              onClick={() => this.onAdd_LeftInstaRightWord(pageId)}
                              backgroundimage={button_leftinstarightword}
                            />

                            <AddElementButton
                              text={'前往個人頁面'}
                              onClick={this.onlink_homepage}
                            />
                            </div>
                            <ul>
                              <p>您的密碼為： {pageId} ，切勿忘記，若遺失密碼將無法再次編輯此頁面，或可記得此永久網址</p>
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
    if (this.state.pws != null && this.state.pageId != null) {
      listPagesByTagAndPid(this.state.pws, this.state.pageId).then(page => {
        this.setState({ "page": page })
      })

    }
  }

  // When the App first renders
  componentDidMount() {
    this.load()
  }

  // When state changes
  componentDidUpdate(prevProps, prevState) {
    // if (!arraysEqual(this.state.blocks, this.state.preblocks)) {
    //   console.log("componentDidUpdate State1", this.state.blocks)
    //   console.log("componentDidUpdate preblocks", this.state.preblocks)
    //   this.setState({ "preblocks": Array.from(this.state.blocks) })
    //   this.load()
    // }
    if(this.state.blocks!==prevState.blocks){
      this.load()
    }
  }

}




export default APP_JOURNI_EDIT


function filter_page(page, owner) {
  console.log("journey filter_page:page", page)
  console.log("journey filter_page:userName", owner)
  let respond = {}
  page.forEach(p => {
    if (p.owner == owner) {
      respond = {
        page: p.page
      }
    }
  }
  )
  console.log("journey filter_page:respond", respond)
  return respond
}

function filter_room(roomData, userName) {
  roomData = roomData ? roomData : []
  let filter_roomData = []
  roomData.forEach(room => {

    if (room.owner == userName) {
      filter_roomData.push(room)
    }
  }
  )
  console.log("filter_room userName", userName)
  console.log("filter_room roomData", roomData)
  console.log("filter_roomData", filter_roomData)
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