import React from "react";

import { Row, Layout } from "antd";

import "../../App.css";
import "./index.css";
import Sidebar from "./Sidebar.js";

const { Content } = Layout;

class StandardLayout extends React.Component {
  state = {};

  render() {
    const { image, title, content, app} = this.props;
    return (
      <div>
        <Layout className="theme-content">
          <Sidebar app={app}/>
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
