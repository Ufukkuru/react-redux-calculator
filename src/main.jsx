import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.jsx'
import { Provider } from 'react-redux';
<script src="https://kit.fontawesome.com/84b351566e.js" crossorigin="anonymous"></script>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
