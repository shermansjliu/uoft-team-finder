import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { User, Group } from "grommet-icons";
import { SettingOutlined } from "@ant-design/icons";
export default class HomeViewFooter extends Component {
  render() {
    return (
      <footer className="homeViewFooter">
        <Button block={true} size="large" id="homeViewBackButton">
          Back
        </Button>
        <ul>
          <Link to="/Setting">
            <li className="footerItem">
              <SettingOutlined />
            </li>
          </Link>
          <Link to="/Team">
            <li className="footerItem">
              <Group />
            </li>
          </Link>
          <Link>
            <li className="footerItem">
              <User />
            </li>
          </Link>
        </ul>
      </footer>
    );
  }
}
