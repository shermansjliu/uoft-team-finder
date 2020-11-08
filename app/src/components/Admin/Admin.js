import React, { Component } from "react";
import { Layout, Space, Typography } from "antd";
import HomeViewFooter from "../CourseViewFooter";
import { AdminGrid } from "../AdminGrid/AdminGrid";
import { withRouter } from "react-router-dom";
import "../../App.css";
import "./style.css";
import bkimg from "../../img/home-books.jpg";
import AdminLayout from "../AdminLayout/AdminLayout";

const { Sider, Content } = Layout;
const { Title } = Typography;

class Admin extends Component {
  state = {
    user: { username: "admin", password: "admin", admin: true },
    users: [
      { username: "user", password: "user", admin: false },
      { username: "user2", password: "user2", admin: false },
      { username: "admin", password: "admin", admin: true },
    ],
    teams: [
      {
        teamName: "The John Wicks",
        members: [
          { userID: "DavidID", name: "David" },
          { userID: "ShermanID", name: "Sherman" },
          { userID: "QuincyID", name: "Quincy" },
          { userID: "JesseID", name: "Jesse" },
        ],
        capacity: 4,
      },
      {
        teamName: "BA Forever",
        members: [],
        capacity: 4,
      },
    ],
    courses: [
      {
        courseName: "csc309",
        department: "CSC",
        description: "This is a description",
        image: bkimg,
      },
      {
        courseName: "csc301",
        department: "CSC",
        description: "This is a description",
        image: bkimg,
      },
      {
        courseName: "csc302",
        department: "CSC",
        description: "This is a description",
        image: bkimg,
      },
      {
        courseName: "csc303",
        department: "CSC",
        description: "This is a description",
        image: bkimg,
      },
    ],
  };

  render() {
    if (this.props.location.state) {
      return (
        <AdminLayout
          title={"AdminCourses"}
          content={<AdminGrid />}
          appState={this.state}
        />
      );
    } else {
      // no permission
      return (
        <div className="center_">
          <h1> You do not have permission to this page</h1>
        </div>
      );
    }
  }
}

export default withRouter(Admin);
