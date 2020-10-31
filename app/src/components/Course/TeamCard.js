import React, { Component } from "react";
import { Typography, Statistic, Menu } from "antd";
import "../../App.css";
import "./index.css";

const { Title } = Typography;
const { SubMenu } = Menu;
export default class TeamCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { teamName, members, capacity } = this.props;
    return (
      <div className="teamCardContainer">
        <div className="teamCardHeader">
          <Title level={2}>{teamName}</Title>
          <Statistic value={members.length} suffix={`/${capacity}`} />
        </div>
        <Menu mode="inline">
          <SubMenu title="Current Members">
            {members.map((member) => {
              return <Menu.Item>{member.name}</Menu.Item>;
            })}
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
