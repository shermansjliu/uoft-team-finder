import { Card, Input, List} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import "./style.css"
import {Link} from "react-router-dom";
import bkimg from "../../img/home-books.jpg";
import {SearchOutlined} from "@ant-design/icons";

const {Meta} = Card;

class CourseGrid extends React.Component {
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
            {
                courseName: 'csc369',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc373',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc320',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc343',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
        ],
        onSearchString: "",
    };

    render() {
        const filteredCourses = this.state.courses.filter(course => {
            return course.courseName.includes(this.state.onSearchString)})
        return (
            <>
                <div >
                    <h1 className="courseCode theme-title">{"Courses"}</h1>
                    <div className={"center-wrapper"}>
                        <Input
                            className="center__ admin-course-search"
                            placeholder="search a course here"
                            value={this.state.onSearchString}
                            onChange={(e) => {
                                this.setState({onSearchString: e.target.value})
                            }}
                            size="large"
                            prefix={<SearchOutlined/>}
                        />
                    </div>
                </div>
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
                            <Link to={`/Course/${item.courseName}`} params={{ course: item }}>
                                <Card hoverable
                                    cover={
                                        <img className={"courseCard"}
                                            alt="Cannot load"
                                            src={item.image}
                                        />
                                    }
                                >
                                    <Meta
                                        title={item.courseName}
                                        description={item.description}
                                    />
                                </Card>
                            </Link>
                        </List.Item>
                    )}
                />,

            </>
        );
    }
}

export default CourseGrid;