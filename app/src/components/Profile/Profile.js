import react from 'react';
import { Avatar, List, Layout, Input, InputNumber, Divider, Button} from 'antd'
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import "./style.css";
import Profile_image from './Profile_image.js';
import  { change_info } from "./action.js";
const { Header, Footer, Sider, Content,} = Layout;


class Profile extends react.Component {
    state = {
        name:'harry',
        name_editing:false,
        major:'wizard',
        major_editing:false,
        year:'4',
        year_editing:false,
        courses:'DADA',
        courses_editing:false,
        cGPA:'',
        cGPA_editing:false,
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value // [name] sets the object property name to the value of the `name` variable.
        });
        console.log(this.state)
        console.log(name)
        console.log(value)
      };

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
                        }}>
                        <div>
                            <h3 style={{fontSize:"30px"}}> About me</h3>
                            <div>
                                <h3 style={{float:"left"}}> Major: </h3>
                                <Input style={{float:"right", width:"50%"}} name="major" onChange={this.handleInputChange} placeholder={this.state.major} bordered={false} />
                            </div>
                            <Divider></Divider>
                            <div>
                                <h3 style={{float:"left"}}> Year: </h3>
                                <Input style={{float:"right", width:"50%"}} name="year" onChange={this.handleInputChange} placeholder={this.state.year} bordered={false} />
                            </div>
                            <Divider></Divider>
                            <div>
                                <h3 style={{float:"left"}}>Courses taking: </h3>
                                <Input style={{float:"right", width:"50%"}} name="courses" onChange={this.handleInputChange} placeholder={this.state.courses} bordered={false} />
                            </div>
                            <Divider></Divider>
                            <div>
                                <h3 style={{float:"left"}}>cGPA: (optional)</h3>
                                <Input style={{float:"right", width:"50%", color:""}} name="cGPA" onChange={this.handleInputChange} placeholder={this.state.cGAP} bordered={false} />
                            </div>
                        </div>
                    </footer>
                </Layout>
                
                <Layout id="experience_wrapper" style={{backgroundColor:"transparent"}}>
                    <Sider id="leftpadding" style={{backgroundColor:"transparent"}} width="50%" style={{backgroundColor:"transparent"}}/>
                    <Layout style={{backgroundColor:"transparent"}}>
                        <div id="name block" style={{width:"100%", height: 300}}>
                            <div align="center" style={{paddingTop:60}}>
                                <h3 style={{fontSize:"64px"}}>{this.state.name}</h3>
                            </div>
                            <div id="experience_bar" width="50%" style={{
                            height:"100%",
                            padding:30,
                            }}>
                            </div>
                        </div>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}


export default Profile;
