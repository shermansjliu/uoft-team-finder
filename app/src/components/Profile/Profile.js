<<<<<<< HEAD
import react from "react";
import { Avatar, List, Layout, Descriptions } from "antd";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import "./style.css";

const { Sider, Content } = Layout;

class Profile extends react.Component {
  state = {
    reviews: [
      { name: "quincy", content: "for test purpose" },
      { name: "quincy", content: "here goes reviews" },
    ],
  };
  render() {
    return (
      <Layout id="profile_wrapper">
        <Sider id="profile_image_bar">
          <Avatar
            icon={<UserOutlined />}
            size={160}
            shape="circle"
            style={{
              color: "#FFFAF0",
              backgroundColor: "#4682B4",
            }}
          ></Avatar>
        </Sider>

        <Sider id="reviews_bar">
          <List
            itemLayout="horizontal"
            dataSource={this.state.reviews}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={item.name}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </Sider>

        <Content id="information_bar">
          <Descriptions title="User Info">
            <Descriptions.Item label="Name">Someone </Descriptions.Item>
            <Descriptions.Item label="Year">Third </Descriptions.Item>
            <Descriptions.Item label="Major">
              Computer Science{" "}
            </Descriptions.Item>
            <Descriptions.Item label="Perso">
              Here goes the personal descriton!
            </Descriptions.Item>
          </Descriptions>
          ,
        </Content>
      </Layout>
    );
  }
=======
import React from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

import InformationBar from './InformationBar.js';
import TabTable from './TabTable.js';

class Profile extends React.Component {
    state = {
        name:"Enter your name here.",
        major:"Enter your specialist or major here.",
        description:"Write something about you!",
        year:"3",
        cGPA:"",
        courses:[
            {courseTitle: 'CSC309'},
            {courseTitle: 'CSC373'},
        ],
        teams:[
            {teamName: 'THE JOHN WICKS'}
        ],
        exps:[
            {expTitle: 'CSC207',
             content: 'Took it last year!'}
        ]
    }

   render() {
       return (
           <Layout style={{
               height:"100vh",
           }}>
               {/* Left side bar */}
               <InformationBar infos={this}
                                name={this.state.name}
                                major={this.state.major}
                                year={this.state.year}
                                cGPA={this.state.cGPA}
                                description={this.state.description} />
               {/* Right side bar */}
               <Layout style={{
                   width:"70%",
                   height:"100%",
                   padding:24,
               }}>
                   <TabTable infos={this}></TabTable>
               </Layout>
           </Layout>
       )
   }
>>>>>>> 8f378ab4c2fd3ea5c14feaff5f328f6bdc806cab
}

export default Profile;
