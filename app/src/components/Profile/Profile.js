import React, { useState } from 'react';
import {Layout, Input, Divider, Avatar, Descriptions, Badge, Menu, Button, Dropdown, Typography} from 'antd'
import {DownOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "./style.css";

const { Header, Footer, Sider, Content} = Layout;
const { Paragraph } = Typography;


class Profile extends React.Component {
    state = {
        name:"Enter Here",
        major:"",
        year:"",
        cGPA:"",
        courses:[],
    }

    handleInputChange = event => {
        const target = event.target;
        console.log(target)
        // const value = target.value;
        // const name = target.name;
        // console.log(value);
        // console.log(name)
        // this.setState({
        //     [name]: value
        // });
    };

   render() {
    const menu = (
        <Menu   >
            <Menu.Item key="1" icon={<UserOutlined />}>
            CSC309 
            <button style={{float: 'right'}}>Edit</button>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
            CSC373
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
            CSC240
            </Menu.Item>
        </Menu>
        );


       return (
           <Layout style={{
               height:"100vh",
           }}>
               {/* Left side bar */}
               <Sider width="500px" style={{    
                   height:"100%",
                   padding:"20px",
                   backgroundColor:"seashell",
               }}>
                    {/* Profile */}
                    <Avatar size={180} icon={<UserOutlined/>} style={{position:"relative", top:"40px", left:"150px", margin:"0"}}/> 
                    <div style={{width:"100px", color:"red",height:"100px"}}></div>
                    <div>
                        <Descriptions title="User Info" layout="vertical" bordered>
                            <Descriptions.Item label="name">
                                <Paragraph name="name"
                                    editable={{
                                    onChange: this.handleInputChange,
                                }}></Paragraph>
                            </Descriptions.Item>
                            <Descriptions.Item label="Major">Enter Here</Descriptions.Item>
                            <Descriptions.Item label="cGPA">Enter Here</Descriptions.Item>
                            <Descriptions.Item label="About me" span={3}>
                                Enter Here
                            </Descriptions.Item>
                            <Descriptions.Item label="Current Courses">
                                <Dropdown overlay={menu}>
                                    <Button>
                                        Expand <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
               </Sider>
               {/* Right side bar */}
               <Layout style={{
                   width:"70%",
                   height:"100%",
               }}>
                   layout
               </Layout>
           </Layout>
       )
   }
}


export default Profile;
