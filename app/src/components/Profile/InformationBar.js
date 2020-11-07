import React from 'react';
import {Avatar, Descriptions, Typography, Layout, InputNumber, Input} from 'antd'
import {UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import { setUserName, setMajor, setDescription, setYear, setGPA }from './Action.js'

const { Sider } = Layout;
const { Paragraph } = Typography;
const { TextArea } = Input;

class InformationBar extends React.Component{
    render() {
        const {infos, name, major, year, gpa, description,} = this.props

        return (
            <Sider width="30%" style={{    
                height:"100vh",
                padding:"20px",
                backgroundColor:"seashell",
            }}>
                <Avatar size={180} icon={<UserOutlined/>} style={{position:"relative", top:"5%", left:"30%", margin:"0"}}/> 
                <div style={{width:"100px", color:"red",height:"100px"}}></div>
                <div>
                    <Descriptions title="User Info" layout="vertical" bordered>
                        <Descriptions.Item label="Name" span={2}>
                            <Paragraph editable={{onChange: e => setUserName(infos, e)}}> {name} </Paragraph>
                        </Descriptions.Item>
                        <Descriptions.Item label="Specialist/Major" span={2}>
                            <Paragraph editable={{onChange: e => setMajor(infos, e)}}> {major} </Paragraph>
                        </Descriptions.Item>
                        <Descriptions.Item label="Current Year" span={2}>
                            <InputNumber min={1} max={10} defaultValue={year} onChange={e => setYear(infos, e)} />
                        </Descriptions.Item>
                        <Descriptions.Item label="cGPA" span={2}>
                            <InputNumber min={1} max={4} defaultValue={gpa} onChange={e => setGPA(infos, e)} />
                        </Descriptions.Item>
                        <Descriptions.Item label="About me" span={3}>
                            <TextArea showCount maxLength={200} onChange={e => setDescription(infos, e)} allowClear={true} autoSize={true}> {description} </TextArea>
                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </Sider>
        )
    }
}

export default InformationBar