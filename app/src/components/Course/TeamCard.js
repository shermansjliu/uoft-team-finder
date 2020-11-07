import React, { Component } from "react";
import { Typography, Statistic, Menu, Image } from "antd";
import teamPlaceholder from "./teamPlaceholder.jpg";
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
          <Title level={3}>{teamName}</Title>
          <Statistic
            className="memberNumber"
            value={members.length}
            suffix={`/ ${capacity}`}
          />
        </div>
        <div className="teamImageContainer">
          <Image
            width={100}
            className="teamImage"
            src={teamPlaceholder}
            alt="TeamImage"
            height={100}
          />
        </div>
      </div>
    );
  }
}
