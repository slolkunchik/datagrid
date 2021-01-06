import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>,
document.getElementById('root')
)