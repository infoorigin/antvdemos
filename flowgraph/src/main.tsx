import React from 'react';
import ReactDOM from 'react-dom';
import '@antv/xflow/dist/index.css';
import 'antd/dist/antd.css';
import App from './App';

const metaData = {flowId :"f1"}; 
ReactDOM.render(
  <React.StrictMode>
    <App meta = {metaData} />
  </React.StrictMode>,
  document.getElementById('root')
)
