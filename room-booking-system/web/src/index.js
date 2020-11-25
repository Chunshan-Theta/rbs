import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import APP_V1_HOME from './App_v1_home'
import APP_V2_HOME from './App_v2_home'
import registerServiceWorker from './registerServiceWorker'
import queryString from 'query-string'

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<APP_V1_HOME />, document.getElementById('tool'))
ReactDOM.render(<APP_V2_HOME />, document.getElementById('test'))
registerServiceWorker()
