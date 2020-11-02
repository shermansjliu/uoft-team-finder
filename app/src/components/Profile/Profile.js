import react from 'react';
import { Avatar, List, Layout, Descriptions } from 'antd'
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import "./style.css";
import Profile_image from './Profile_image.js';
const { Header, Footer, Sider, Content } = Layout;

class Profile extends react.Component {
    state = {
        name: "Quincy Yu"
    }
    render() {
        return (
            <Layout id="profile_wrapper" style={{
                padding:30,
                height:"200vh",
            }}>
                <Layout id='fixed_bar' style={{
                    position:"fixed",
                    height:"100vh",
                    left:"10%",
                    width:"30%"}}>
                    <div id="profile_image" style={{
                            paddingTop:70,
                            height:"40%",
                            width:"100%",
                        }}>
                        <div align="center">
                            <Profile_image></Profile_image>
                        </div>
                    </div>
                    <footer id="personal_information" style={{
                            padding:40,
                            borderRadius: "8%",
                            height:"45%",
                            weight:"80%"
                        }}>
                        <h3> personal info</h3>
                    </footer>
                </Layout>

                <div id="name block" style={{
                    width: "100%",
                    height: "100"
                }}></div>
                
                <Layout id="leftpadding" width="50%" style={{backgroundColor:"transparent"}}/>
                <Sider id="experience_bar" width="50%" style={{
                    height:"100%",
                    padding:30,
                }}>
                    <div align="center" style={{paddingTop:60}}>
                        <h3 style={{fontSize:"64px"}}>{this.state.name}</h3>
                    </div>
                </Sider>
            </Layout>
        )
    }
}


export default Profile;
