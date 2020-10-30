import React, {Component} from "react";
import {Layout, Space, Typography} from 'antd'

import '../App.css'

const {Sider, Content} = Layout
const {Title} = Typography
class Home extends Component {
  render() {
    return  (
     <div> 
      <Layout className="homeViewContainer">

        <Sider className="homeViewSideMenu">Sider
        <Title level={2}>CSC236</Title>
            <Space direction="vertical">
              <Title level={3}> Teams: 10</Title>
              <Title level={5}> 5 Project</Title>
              <Title level={5}> 5 Study</Title>
              </Space>         
        </Sider>
        <Content hasSider={true} style={{background:"red"}}>Content</Content>
      </Layout>
      </div>
    )


  }
}

export default Home;
