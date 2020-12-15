import React from 'react';
import {Avatar, Form, Typography, Layout, InputNumber, Input, Space, Button} from 'antd'
import {UserOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles.css';
import '../../App'
import '../../App.css'
import {setUserName, setMajor, setEmail, setDescription, setYear, setGPA} from './Action.js'
import {Link} from "react-router-dom";


const {Sider} = Layout;
const {Paragraph} = Typography;
const {TextArea} = Input;

class InformationBar extends React.Component {
    render() {
        const {infos} = this.props

        return (
            <Sider width="100%" className="informationBar theme-background-color">
                <div className="infoIconBar">
                    <Space size="large" direction="horizontal">
                        <Link to={'/Home'}>
                            <HomeOutlined className={"linkIconColor"}/>
                        </Link>
                        <Link to={'/'}>
                            <LogoutOutlined className={"linkIconColor"}/>
                        </Link>

                    </Space>
                </div>
                <Avatar className="profileImg" size={180} icon={<UserOutlined/>}/>
                <div className='profilePadding'></div>
                {/*<h3>USER INFO</h3>*/}
                <Form labelCol={{span: 8}} layout="horizontal">
                    <Form.Item label="Name">
                        <Paragraph className="formText"
                                   editable={{onChange: e => setUserName(infos, e)}}> {infos.state.username} </Paragraph>
                    </Form.Item>
                    <Form.Item label="Specialist/Major">
                        <Paragraph className="formText"
                                   editable={{onChange: e => setMajor(infos, e)}}> {infos.state.major} </Paragraph>
                    </Form.Item>
                    <Form.Item label="Email Address">
                        <Paragraph className="formText"
                                   editable={{onChange: e => setEmail(infos, e)}}>{infos.state.email} </Paragraph>
                    </Form.Item>
                    <Form.Item label="Year">
                        <InputNumber min={1} max={10} defaultValue={infos.state.year} disabled={false}
                                     onChange={e => setYear(infos, e)}/>
                    </Form.Item>
                    <Form.Item label="cGPA">
                        <InputNumber min={1} max={4} defaultValue={infos.state.cGPA} onChange={e => setGPA(infos, e)}/>
                    </Form.Item>
                    <Form.Item label="About me">
                        <TextArea autoSize={{minRows: 2}} showCount={true} maxLength={200}
                                  onChange={e => setDescription(infos, e)}> {infos.state.description} </TextArea>
                    </Form.Item>
                </Form>

            </Sider>
        )
    }
}

export default InformationBar