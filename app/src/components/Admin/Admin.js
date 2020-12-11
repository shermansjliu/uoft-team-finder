import React, { Component } from "react";
import { Layout, Space, Typography } from "antd";
import { AdminGrid } from "../AdminGrid/AdminGrid";
import { withRouter } from "react-router-dom";
import "../../App.css";
import "./style.css";
import bkimg from "../../img/home-books.jpg";
import AdminLayout from "../AdminLayout/AdminLayout";
import CourseAdmin from "../Course/CourseAdmin";

const { Sider, Content } = Layout;
const { Title } = Typography;

class Admin extends Component {
    constructor(props) {
        super(props);
        this.props.history.push("/Admin");

    }

  render() {
      return (
        <AdminLayout
          title={""}
          content={
            <AdminGrid />
          }
          app={this.props.app}
        />
      );
  }
}

export default withRouter(Admin);
