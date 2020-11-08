import { List, Card, Button, Input} from 'antd';
import React from 'react';

import {removeCourse} from './Action.js'

class CourseTable extends React.Component{
    render() {
        let newCourseTitle = 'Course Title'
        const {infos} = this.props;
        const courses = infos.state.courses;
        return (
            <div>
                <h3 style={{fontSize: 30}}>Courses Currently Taking:</h3>
                <div style={{padding:10}}>
                    <Input placeholder={newCourseTitle} style={{width:120}} allowClear={true} onChange={e => {newCourseTitle = e.target.value}}/>
                    <Button type="primary" shape="round" style={{position:"relative", left:40}} onClick={() => {
                        if (newCourseTitle.length >= 10) {
                            alert("Please enter a course title with less than 10 characters.");
                            newCourseTitle ='';
                        } else {
                            courses.push({courseTitle:newCourseTitle})
                            infos.setState({courses: courses});}}}>add</Button>
                </div>
                <List
                    grid={{
                    span:2,
                    gutter: 32,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                    }}
                    dataSource={courses}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.courseTitle}>
                            
                            <Button onClick={() => removeCourse(infos, item)} type="primary" shape="round" style={{float: 'right'}}>Remove</Button>
                        </Card>
                    </List.Item>
                    )}
                />  
            </div>
        )
    }
}

export default CourseTable