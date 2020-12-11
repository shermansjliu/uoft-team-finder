import { Card, Input, List} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import "./style.css"
import {Link} from "react-router-dom";
import bkimg from "../../img/home-books.jpg";
import {SearchOutlined} from "@ant-design/icons";
import {getAllCourses} from "../AdminGrid/action";

const {Meta} = Card;

class CourseGrid extends React.Component {
    state = {
        courses: [
        ],
        onSearchString: "",
    };

    render() {
        getAllCourses(this)
        const filteredCourses = this.state.courses.filter(course => {
            return course.courseCode.includes(this.state.onSearchString)})
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
                            <Link to='/Course' params={{ course: item }}>
                                <Card hoverable
                                    cover={
                                        <img className={"courseCard"}
                                            alt="Cannot load"
                                            src={item.image}
                                        />
                                    }
                                >
                                    <Meta
                                        title={item.courseCode}
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