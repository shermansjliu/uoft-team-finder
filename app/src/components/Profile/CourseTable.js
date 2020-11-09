import { List, Card, Button, Input, Row, Space, Tooltip, Sapce, Typography} from 'antd';
import React from 'react';
import "./styles.css"
import "../../App.css"
import {
    FileAddOutlined
} from '@ant-design/icons';
import {onSearchCourse, addCourse} from './Action.js'
import bkimg from "../../img/home-books.jpg";
import CourseCard from './CourseCard';

const { Search } = Input;
const {Title} = Typography;

class CourseTable extends React.Component{
    state={
        onSearchString: '',
    }
    render() {
        const {infos} = this.props;
        const filteredCourses = infos.state.courses.filter(course => {
            return course.courseName.includes(this.state.onSearchString)})
        return (
            <div>
                <Row type="flex" align="middle">
                    <Space>
                        <Title>Course</Title>
                        <Tooltip title="add more courses" onClick={() => addCourse(infos, bkimg)} >
                            <Button shape="circle"
                                    icon={<FileAddOutlined
                                        />}/>
                        </Tooltip>
                        <Search  placeholder="search a course here"
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
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 4,
                        xxl: 5,
                    }}
                    dataSource={filteredCourses}
                    renderItem={item => (
                    <List.Item>
                        <CourseCard course={item}
                                    page={infos} />
                    </List.Item>
                    )}
                />  
            </div>
        )
    }
}

export default CourseTable