import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
// import APP_V1_HOME from './App_v1_home'
import APP_V2_HOME from './App_v2_home'
import APP_HOME_EDIT from './App_home_edit'
import registerServiceWorker from './registerServiceWorker'
import queryString from 'query-string'

ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<APP_V1_HOME />, document.getElementById('app_v1'))
ReactDOM.render(<APP_V2_HOME />, document.getElementById('app_v2'))
ReactDOM.render(<APP_HOME_EDIT />, document.getElementById('app_home_edit'))

registerServiceWorker()
