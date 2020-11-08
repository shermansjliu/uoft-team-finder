import {Space, Button, Row, Typography, List} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import {
    FileAddOutlined
} from '@ant-design/icons';
import CourseCard from "./CourseCard";
import {addCourse} from "./action";
import {Tooltip} from "antd";
const {Title} = Typography;

export class AdminGrid extends React.Component {

    state = {
        courses: [
            {
                courseName: 'csc309',
                department: 'CSC',
                description: 'This is a description',
                image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            },
            {
                courseName: 'csc301',
                department: 'CSC',
                description: 'This is a description',
                image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            },
            {
                courseName: 'csc302',
                department: 'CSC',
                description: 'This is a description',
                image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            },
            {
                courseName: 'csc303',
                department: 'CSC',
                description: 'This is a description',
                image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            },
        ],
        courseName: "333",

    };


    render() {
        return (
            <>
                <Row type="flex" align="middle">
                    <Space>
                        <Title>Course</Title>
                        <Tooltip title="add more courses" style={{margin: 2}}>
                            <Button shape="circle"
                                    icon={<FileAddOutlined
                                        onClick={() => addCourse(this)}/>}/>
                        </Tooltip>
                    </Space>
                </Row>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 6,
                    }}
                    dataSource={this.state.courses}
                    renderItem={item => (
                        <List.Item>
                            <CourseCard
                                page={this}
                                course={item}
                            />
                        </List.Item>
                    )}
                />


            </>
        );
    }


}
