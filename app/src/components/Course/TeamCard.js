import React, { Component } from "react";
import { Typography, Statistic, Menu, Image } from "antd";
import teamPlaceholder from "../../img/teamPlaceholder.jpg";
import "../../App.css";
import "./index.css";
import { Link } from "react-router-dom";

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
        <Link to={"/Team"}>
          <div className="teamCardHeader">
            <Title className="teamName" level={3} ellipsis={true}>
              {teamName}
            </Title>
            <Statistic
              className="memberNumber"
              value={members.length}
              suffix={`/ ${capacity}`}
            />
          </div>
        </Link>
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
