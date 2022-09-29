import 'antd/dist/antd.css';
import './index.css';
import {  Layout, Menu } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import QueryBuilderApp from './pages/QueryBuilderApp';
import AutoInsights from './pages/AutoInsights';
import ModelBuilder from './pages/modelbuilder';

const { Header, Footer } = Layout;


const App = () => {
  const navigate = useNavigate();

  return (
  <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['item-1']}
        onClick={({key}) => navigate("/"+key)}
        items={
          [
            { label: 'Home', key: 'home' }, 
            { label: 'QueryBuilder', key: 'build' }, 
            { label: 'AutoInsights', key: 'insights' }, 
            { label: 'ModelBuilder', key: 'model' }, 
          ]
        }
      />
    </Header>

    <Routes>
        
          <Route path='/' element={< Home />}></Route>
          <Route path='/home' element={< Home />}></Route>
          <Route path="/build" element={<QueryBuilderApp />} />
          <Route path="/insights" element={<AutoInsights />} />
          <Route path="/model" element={<ModelBuilder />} />
          
        
      </Routes>

    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Auto Insights 2022

    </Footer>
  </Layout>
  )
}

export default App
