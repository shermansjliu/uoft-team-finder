import {Space, Button, List} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import {
    FileAddOutlined, SearchOutlined
} from '@ant-design/icons';
import CourseCard from "./AdminCourseCard";
import {Tooltip, Input} from "antd";
import bkimg from "../../img/home-books.jpg";
import {addCourse} from "./action";
import "./style.css"

export class AdminGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            onSearchString: "",
        }
    }


    render() {
        const filteredCourses = this.state.courses.filter(course => {
            return course.courseName.includes(this.state.onSearchString)
        })
        return (
            <>
                <div>
                    <div className={"center-wrapper"}>
                        <Space >
                            <h1 className="courseCode theme-title">{"Courses"}</h1>
                            <Tooltip title="add more courses" onClick={() => addCourse(this, bkimg)}>
                                <Button shape="circle"
                                        icon={<FileAddOutlined
                                        />}/>
                            </Tooltip>
                        </Space>
                    </div>
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
                            <CourseCard
                                page={this}
                                course={item}
                                key={item.courseName}
                            />
                        </List.Item>
                    )}
                />


            </>
        );
    }
}
