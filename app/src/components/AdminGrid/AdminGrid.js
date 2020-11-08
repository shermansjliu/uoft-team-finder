import {Space, Button, Row, Typography, List} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import {
    FileAddOutlined
} from '@ant-design/icons';
import CourseCard from "./AdminCourseCard";
import {Tooltip, Input } from "antd";
import bkimg from "../../img/home-books.jpg";
import {addCourse, onSearch} from "./action";


const {Title} = Typography;
const { Search } = Input;
export class AdminGrid extends React.Component {

    state = {
        courses: [
            {
                courseName: 'csc309',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc301',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc302',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc303',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
        ],
        displayedCourses: [
            {
                courseName: 'csc309',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc301',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc302',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc303',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
        ],
        onSearchString: "",

    };


    render() {
        return (
            <>
                <Row type="flex" align="middle">
                    <Space>
                        <Title>Course</Title>
                        <Tooltip title="add more courses" >
                            <Button shape="circle"
                                    icon={<FileAddOutlined
                                        onClick={() => addCourse(this, bkimg)}/>}/>
                        </Tooltip>
                        <Search  placeholder="search a course here"
                                 onSearch={() => onSearch(this, this.state.onSearchString)}
                                 value={this.state.onSearchString}
                                 onChange={(e)=>{this.setState({onSearchString: e.target.value})}}
                                 enterButton

                        />
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
                    dataSource={this.state.displayedCourses}
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
