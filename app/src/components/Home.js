import React, {Component} from "react";
import {Layout, Space, Typography} from 'antd'

import {SettingOutlined, TeamOutlined} from '@ant-design/icons'

import '../App.css'

const {Sider, Content, Footer} = Layout
const {Title} = Typography
class Home extends Component {
  render() {
    return  (
     <div> 
      <Layout className="homeViewContainer">

        <Sider >
          <div className="homeViewSideMenu">
            <div>
        <Title className="classTitle" level={2}>CSC236</Title>
        <Title className="totalTeams" level={3}> Teams: 10</Title>

        <Space direction="vertical">
        <Title level={5}> Project: 5</Title>
        <Title level={5}> Study: 5</Title>
      
        </Space>
        </div>
        {/* <Layout> */}
          <footer className="homeViewFooter">
            <ul>
              
           <li className="footerItem"><SettingOutlined /></li>
           <li className="footerItem"><TeamOutlined /></li>
           <li className="footerItem"></li>
            </ul>
        
         </footer>
         {/* </Layout> */}
       
         </div>
        </Sider>
        <Content hasSider={true} className="homeViewContent">Content</Content>
      </Layout>
      </div>
    )


  }
}

export default Home;
