import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import '@antv/xflow/dist/index.css';
import 'antd/dist/antd.css';
import '@antv/x6/dist/x6.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)