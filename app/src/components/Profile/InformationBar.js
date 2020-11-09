import React from 'react';
import {Avatar, Form, Typography, Layout, InputNumber, Input, Space, Button} from 'antd'
import {UserOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles.css';
import '../../App.css'
import { setUserName, setMajor, setDescription, setYear, setGPA }from './Action.js'
import {Link} from "react-router-dom";

const { Sider } = Layout;
const { Paragraph } = Typography;
const { TextArea } = Input;

class InformationBar extends React.Component{
    render() {
        const {infos, name, major, year, gpa, description,} = this.props

        return (
            <Sider width="30%" className="informationBar theme-background-color">
                <div className="infoIconFootBar">
                    <Space size="large" direction="horizontal">
                    <Link to={'/Home'}>
                        <HomeOutlined className={"btn-color infoHomeIcon"}/>
                    </Link>
                    <Link className="infoLogoutIcon" to={'/'}>
                        <LogoutOutlined className={"btn-color infoLogoutIcon"}/>
                    </Link>
                    <Button className="ant-btn-primary displayButton" onClick={ ()=>{
                        infos.setState({isVisiter: !infos.state.isVisiter})
                    }
                    }>changeMode(for phase1 display)</Button>
                    </Space>
                </div>
                <Avatar className="profileImg" size={180} icon={<UserOutlined/>}/>
                <div className='profilePadding'></div>
                <h3>USER INFO</h3>
                <Form labelCol={{span: 8}} layout="horizontal">
                    <Form.Item label="Name">
                        <Paragraph className="formText" editable={{onChange: e => setUserName(infos, e)}}> {name} </Paragraph>
                    </Form.Item>
                    <Form.Item label="Specialist/Major">
                        <Paragraph className="formText" editable={{onChange: e => setMajor(infos, e)}}> {major} </Paragraph>
                    </Form.Item>
                    <Form.Item label="Year">
                        <InputNumber min={1} max={10} defaultValue={infos.state.year} disabled={infos.state.isVisiter} onChange={e => setYear(infos, e)} />
                    </Form.Item>
                    <Form.Item label="cGPA">
                        <InputNumber min={1} max={4} defaultValue={infos.state.cGPA} disabled={infos.state.isVisiter} onChange={e => setGPA(infos, e)} />
                    </Form.Item>
                    <Form.Item label="About me">
                        <TextArea showCount maxLength={200} onChange={e => setDescription(infos, e)} disabled={infos.state.isVisiter} autoSize={true}> {infos.state.description} </TextArea>
                    </Form.Item>
                </Form>
               
            </Sider>
        )
    }
}

export default InformationBar