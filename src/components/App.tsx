import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
// import { Layout, Menu, ConfigProvider } from 'antd'

import Employee from './employee'

const { Header, Content, Footer } = Layout

const App: React.FC = ({ match }: any) => {
  let defaultKey = match.url.replace('/', '') || 'employee'
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[defaultKey]}
          className="main-menu">
          <Menu.Item key="employee"><Link to="/employee">员工管理</Link></Menu.Item>
          <Menu.Item key="setting"><Link to="/setting">系统设置</Link></Menu.Item>
        </Menu>
      </Header>
      <Content className="content-wrapper">
        <Route path="/" exact component={Employee}></Route>
        <Route path="/employee" component={Employee}></Route>
        <Route path="/setting" component={Employee}></Route>
      </Content>
      <Footer className="footer">TypeScript in Action</Footer>
    </Layout>
  )
}

export default App
