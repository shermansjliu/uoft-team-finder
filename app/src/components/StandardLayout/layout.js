import React from "react";

import { Col, Row, Layout } from "antd";
import "./index.css";
import "../../App.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.js";

const { Sider, Content } = Layout;

class StandardLayout extends React.Component {
  state = {};

  render() {
    const { image, title, content } = this.props;
    return (
      <div>
        <Layout className="theme-content">
          <Sidebar image={image} />
          <Content className="content">
            <div className={"text-center"}>
              <Row>
                <h1>{title}</h1>
              </Row>
            </div>
            {content}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default StandardLayout;
