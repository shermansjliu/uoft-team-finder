import react from 'react';
import {Layout, Input, Divider} from 'antd'
import 'antd/dist/antd.css';
import "./style.css";
import Profile_image from './Profile_image.js';
import personal_info from './personal_info.js';
const { Header, Footer, Sider, Content,} = Layout;


class Profile extends react.Component {
    state = {
        name:'Harry',
        major:'wizard',
        year:'4',
        courses:'DADA',
        cGPA:'',
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
                            paddingTop:60,
                            height:"40%",
                            width:"100%",
                        }}>
                        <div align="center">
                            <Profile_image></Profile_image>
                        </div>
                    </div>
                    <footer style={{height:"45%", backgroundColor:"transparent"}}>
                        <div id="personal_information" style={{
                            padding:40,
                            borderRadius: "8%",
                            height: "100%",
                        }}>

                            <div>
                                <div id="personal_information">
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
                                        <Input style={{float:"right", width:"50%", color:""}} name="cGPA" onChange={this.handleInputChange} placeholder={this.state.cGPA} bordered={false} />
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                                <personal_info 
                                    handleInputChange={this.handleInputChange}
                                    major={this.state.major}
                                    year={this.state.year}
                                    courses={this.state.courses} 
                                    cGPA={this.state.cGPA}>    
                                </personal_info>
                            </div> */}
                        </div>
                    </footer>
                </Layout>
                
                <div id="upperPart" style={{
                    width: '100%',
                    height: 265,
                    position: 'relative',
                }}>
                        <div style={{backgroundColor:"transparent", position:'relative', left:'70%', paddingTop:70}}>
                            <Input style={{fontSize:"84px" }} placeholder={this.state.name} bordered={false}/>
                        </div>
                </div>
                <div style={{
                    height: 100,
                    width: '100%',
                    border: '4px solid red',
                }}>
                    <Input style={{fontSize:"62px", height:"100%",}} placeholder='write something interesting about you!' bordered={false}></Input>
                </div>
                <div id="lowerPart" style={{
                    width: "100%"
                }}>
                    <div id="lowerLeftPadding" style={{
                        float:"left",
                        width:"50%",
                        height:"100%"
                    }}></div>
                </div>
            </Layout>
        )
    }
}


export default Profile;
