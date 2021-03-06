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
import SignInJourneyForm from './components/SignInJourneyForm'
import SignUpJourneyForm from './components/SignUpJourneyForm'
import DashBoard from './components/dynamic/ViewCalendar'
import EmailBlock from './components/dynamic/EmailBlock'
import PicPage from './components/dynamic/PicPage'
import OnePageHead from './components/dynamic/OnePageHeader'
import BraftEditor from 'braft-editor'

import meta from './components/head'
import { listJourTags, listPages, listJourPages, createJourneyPages, putJourneyPages } from './api/userpages'
import { getDecodedToken } from './api/token'
import Calendar from './components/Calendar'
import BookingModal from './components/BookingModal'
import { floorParams, filterParams, capacityParams, onFilterByFloor, onFilterByFeature, onFilterByCapacity, onFilterByAvailablity } from './helpers/filters'
import { agrs_Demo_OneGoAhead, agrs_Demo_CenterTextContent, agrs_Demo_CenterBanner, gen_component_n_editor, gen_component, agrs_Demo_OnePageHead, agrs_Demo_DashBoard, agrs_Demo_PicPage, agrs_Demo_EmailBlock, agrs_Demo_LeftPicRightWord, agrs_Demo_LeftInstaRightWord } from './helpers/page_element'
import BriefJourney from './components/dynamic/BriefJourney'
import Cookies from 'universal-cookie';
import NavBar_Discover from './components/NavBar_Discover'


const md5 = require("md5")
class APP_JOURNI_DISCOVER extends Component {
  state = {
    decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    blocks: [],
    preblocks: [],
    page: null,
    roomData: null,
    eventDetail: [[" ", [" "]]],
    focus: null,
    pws: null,
    loading: false,
    keyword: null,
    skip_times: 0,
    cookieslikes_stringline: null,
    editorState: BraftEditor.createEditorState("請輸入內容或點擊右上角讀取內容")
  };


  //
  add_like_journey = (tag) => {
    const cookies = new Cookies();
    var likes = cookies.get('likes') ? cookies.get('likes') : []
    console.log("source_likes", likes)
    if (likes.indexOf(tag) == -1) {
      likes.push(tag)
    }
    cookies.set('likes', likes, { path: '/' });
    this.setState({ page: this.state.page })
    console.log("likes", cookies.get('likes'))
  }
  //
  remove_like_journey = (tag) => {
    const cookies = new Cookies();
    var likes = cookies.get('likes') ? cookies.get('likes') : []
    console.log("source_likes", likes)
    if (likes.indexOf(tag) != -1) {
      likes.splice(likes.indexOf(tag), 1);
      cookies.set('likes', likes, { path: '/' });
      console.log("rm_tag", tag)
      console.log("rm_likes", cookies.get('likes'))
      this.setState({ page: this.state.page })
    }
  }

  //
  seved_journey = (tag) => {
    const cookies = new Cookies();
    var likes = cookies.get('likes') ? cookies.get('likes') : []
    if (likes.indexOf(tag) != -1) {
      return true
    }
    return false
  }

  //
  search_keyword = (keyword) => {
    console.log("keyword", keyword)
    this.setState({ "keyword": keyword, "loading": false, "skip_times": 0, "page": [] }, () => { this.load() })

  }

  //
  loadmore = () => {
    this.new_fetch_from_db(10)

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
      loading,
      keyword
    } = this.state
    const signedIn = !!decodedToken
    const featureParams = this.state.filterParams
    const date = this.state.currentDate



    // <AddElementButton
    //   text={'新增欄位： 置中大字'}
    //   onClick={() => this.onAdd_CenterBanner(pageId)}
    // />
    return (
      <Router>
        <div id="discover" className="App">
          <Fragment>
            <Switch>
              <Route path="/discover" exact render={() => {

                //
                this.init_page()

                //
                var rows = []
                if (this.state.page != null) {
                  this.state.page.forEach(row => {
                    if (!this.seved_journey(row.tag)) {
                      rows.push(BriefJourney(row, this.add_like_journey, false))
                    } else {
                      rows.push(BriefJourney(row, this.remove_like_journey, true))
                    }

                  })
                }


                return (
                  <div>
                    <div>
                      <NavBar_Discover
                        search={this.search_keyword}
                      />
                    </div>
                    <div>
                      {rows}
                    </div>
                    <div>
                      <Button
                        className={this.state.loading ? "center disabled" : "center"}
                        onClick={() => this.loadmore()}
                        text={this.state.loading ? `已經到底了` : `加載更多`}
                      />
                    </div>
                  </div>
                )
              }} />

              <Route path="/discover/likes" exact render={() => {
                //
                this.init_page()

                //
                var rows = []
                const cookies = new Cookies();
                var cookieslikes = cookies.get('likes') ? cookies.get('likes') : []
                var cookieslikes_stringline = cookieslikes.join(",")
                console.log("cookieslikes_stringline", 0)
                if (cookieslikes_stringline != this.state.cookieslikes_stringline) {
                  console.log("cookieslikes_stringline", 1)
                  this.setState({ "cookieslikes_stringline": cookieslikes_stringline })
                }
                if (this.state.page != null) {
                  this.state.page.forEach(row => {
                    if (this.seved_journey(row.tag)) {
                      rows.push(BriefJourney(row, this.remove_like_journey, true))
                    }
                  })
                }

                return (
                  <div>
                    <div>
                      <NavBar_Discover
                        search={this.search_keyword}
                      />
                    </div>
                    <div>
                      {rows}
                    </div>
                  </div>
                )
              }} />

            </Switch>
          </Fragment>
        </div>
      </Router>
    )
  }

  new_fetch_from_db(count, fetch_num = 10, empty_run = 0, continue_token = false) {
    var MAX_EMPTY_RUN = 3
    if (this.state.loading == false || continue_token) {
      this.setState({ loading: true })
      var page = this.state.page ? this.state.page : []
      listJourPages(this.state.keyword, this.state.skip_times * fetch_num, fetch_num).then(tmp_page => {
        var valid_page = refactor_page(tmp_page)
        var refactored_page = page.concat(valid_page)
        this.setState({
          "page": refactored_page,
          "skip_times": this.state.skip_times + 1
        })

        if (valid_page.length < count && empty_run < MAX_EMPTY_RUN) {
          console.log("continue_token", continue_token, this.state.keyword)
          this.new_fetch_from_db(count - valid_page.length, fetch_num, empty_run += 1, true)
        } else if (empty_run < MAX_EMPTY_RUN) {
          this.setState({ loading: false })
        }
      })
    }



  }

  load() {
    this.new_fetch_from_db(10)



  }

  init_page() {
    if (this.state.page == null) {
      this.load()
    }
  }

  // When the App first renders
  componentDidMount() {
    //this.load()
    //this.setState({"keyword":""})
  }

  // When state changes
  componentDidUpdate(prevProps, prevState) {
    //this.load()
    if (this.state.keyword !== prevState.keyword) {
      this.load()
    }
    if (prevState.cookieslikes_stringline != this.state.cookieslikes_stringline) {
      this.setState({ loading: true })
      console.log("cookieslikes_stringline", prevState.cookieslikes_stringline, "->", this.state.cookieslikes_stringline)
      listJourTags(this.state.cookieslikes_stringline).then(tmp_page => {
        var valid_page = refactor_page(tmp_page)
        this.setState({
          "page": valid_page
        })
      })
    }
  }

}




export default APP_JOURNI_DISCOVER


function filter_page(page, owner, id) {
  console.log("journey filter_page:page", page)
  console.log("journey filter_page:userName", owner)
  let respond = {}
  page.forEach(p => {
    if (p.owner == owner && id == p._id) {
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

//var ReverseMd5 = require('reverse-md5')
//var rev = ReverseMd5({
//    lettersUpper: true,
//    lettersLower: true,
//    numbers: true,
//    special: true,
//    whitespace: true,
//    maxLen: 50
//})

function refactor_page(page) {
  var refactored_page = []




  page.forEach(ele => {
    if (ele.owner.length == 32) { //屬於是旅程的頁面，非商店頁面
      var title = search_page_info(ele.page)
      var payload = {
        "title": html_strip(title),
        "tag": ele.tag,
      }
      var brief_image = deep_search_from_list(ele.page, ["url", "shortcode"], ["image", "insta", "col1"])
      if (typeof brief_image == "string" && brief_image.startsWith('http')) {
        payload["image"] = brief_image
        refactored_page.push(payload)
      } else if (typeof brief_image == "string") {
        payload["shortcode"] = brief_image
        refactored_page.push(payload)
      }

    }
  })
  return (refactored_page)
}


function search_page_info(blocks) {
  var result = null
  blocks.forEach(block => {
    if (result == null && block.component_type == "PageInfo") {
      result = block.description
    }
  })
  if(result==null){
    result = deep_search_from_list(blocks, ["title"], ["root"])
  }
  return result
}

function deep_search_from_list(blocks, targets, limit_levels) {
  var result = null
  blocks.forEach(block => {
    if (result == null) {
      result = deep_search(block, targets, limit_levels)
    }
  })
  return result
}
function deep_search(block, targets, limit_levels, current_level = "root") {
  for (var [key, val] of items(block)) {
    if (val.constructor == Object) {
      var result = deep_search(val, targets, limit_levels, key)
      if (result != null) {
        return result
      }
    } else {

      if (arrayIn(limit_levels, current_level) && arrayIn(targets, key)) {

        return val
      }
    }

  }
  return null
}
function html_strip(html) {
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}
function arrayIn(arrhaystack, needle) {
  return (arrhaystack.indexOf(needle) > -1);
}

function items(iterable) {
  return {
    [Symbol.iterator]: function* () {
      for (var key in iterable) {
        yield [key, iterable[key]];
      }
    }
  };
}


function deep_items(block, container = [], level = "") {
  for (var [key, val] of items(block)) {

    if (val.constructor == Object) {
      container = deep_items(val, container, key)
    } else {
      container.push({
        "level": level,
        "key": key,
        "val": html_strip(val)
      })
    }

  }
  return container
}