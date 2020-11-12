import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import ApiTool from './ApiTool'
import registerServiceWorker from './registerServiceWorker'
import queryString from 'query-string'

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<ApiTool />, document.getElementById('tool'))
registerServiceWorker()
