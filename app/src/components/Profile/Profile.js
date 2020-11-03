import react from 'react';
import { Avatar, List, Layout, Descriptions } from 'antd'
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import "./style.css";

const { Header, Footer, Sider, Content } = Layout;

class Profile extends react.Component {
    state = {
        reviews: [
            {name: 'quincy',
            content: "for test purpose"},
            {name: 'quincy',
            content: "here goes reviews"}
        ]
    }
    render() {
        return (
            <Layout id="profile_wrapper">
            <Sider id="profile_image_bar" >
                <Avatar icon={<UserOutlined />} size={160} shape="circle"
                style={{
                    color: '#FFFAF0',
                    backgroundColor: '#4682B4',
                }} > 
                </Avatar>
            </Sider>

            <Sider id="reviews_bar">
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.reviews}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<UserOutlined />}/>}
                        title={item.name}
                        description={item.content}
                        />
                    </List.Item>
                    )}
                />
            </Sider>

            <Content id="information_bar">
                <Descriptions title="User Info">
                    <Descriptions.Item label="Name"> 
                    Someone </Descriptions.Item>
                    <Descriptions.Item label="Year"> 
                    Third </Descriptions.Item>
                    <Descriptions.Item label="Major"> 
                        Computer Science </Descriptions.Item>
                    <Descriptions.Item label="Perso">
                    Here goes the personal descriton!
                    </Descriptions.Item>
                </Descriptions>,
            </Content>            
            </Layout>
        )
    }
}


export default Profile;
