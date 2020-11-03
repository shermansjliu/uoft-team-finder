import React from 'react';
import {Avatar} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import style from './style.css';

class Profile_image extends React.Component {
    render() {
        return (
            <div className='shadow' style={{
                borderRadius: "50%",
                position: "relative",
                width: "200px",
                height: "200px"
            }}>
                <Avatar icon={<UserOutlined />} size={200}
                    style={{
                        color: '#FFFAF0',
                        backgroundColor: "#87CEFA"}}> 
                </Avatar>
            </div>
        )
    }
}

export default Profile_image;