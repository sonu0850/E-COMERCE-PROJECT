import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
import TostifyContainer from './Service/http/Toasify/TostifyContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={Store}>
  <App />
  <TostifyContainer/>
  </Provider>
  </BrowserRouter>
)
