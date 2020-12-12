import React, { Component } from "react";
import {Button, Input, Layout, List, Space, Tooltip, Typography} from "antd";
import { AdminGrid } from "../AdminGrid/AdminGrid";
import { withRouter } from "react-router-dom";
import "../../App.css";
import "./style.css";
import bkimg from "../../img/home-books.jpg";
import AdminLayout from "../AdminLayout/AdminLayout";
import CourseAdmin from "../Course/CourseAdmin";
import {checkSession, getAllUsers} from "../../actions/users";
import {addCourse, getAllCourses} from "../AdminGrid/action";
import {FileAddOutlined, SearchOutlined} from "@ant-design/icons";
import CourseCard from "../AdminGrid/AdminCourseCard";

const { Sider, Content } = Layout;
const { Title } = Typography;

class Admin extends Component {
    constructor(props) {
        super(props);
        checkSession(this.props.app)
        this.props.history.push("/Admin");
        this.state = {
            users:[],
            courses: [],
            onSearchString: "",
        }
        getAllCourses(this)
        getAllUsers(this)
    }

  render() {
      const filteredCourses = this.state.courses.filter(course => {
          return course.courseCode.includes(this.state.onSearchString)
      })
      return (
        <AdminLayout
          title={""}
          content={
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
                                  key={item.courseCode}
                              />
                          </List.Item>
                      )}
                  />
              </>
          }
          users = {this.state.users}
          courses = {this.state.courses}
          app={this.props.app}
        />
      );
  }
}

export default withRouter(Admin);
