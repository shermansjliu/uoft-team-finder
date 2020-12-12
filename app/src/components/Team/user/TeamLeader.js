import React from "react";
import { Card, Avatar, Button } from "antd";
import { StarTwoTone } from "@ant-design/icons";
import { Redirect } from "react-router-dom";
import "./style.css";

const { Meta } = Card;

class TeamLeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileClick: false };
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  handleProfileClick() {
    this.setState({ profileClick: true });
  }

  render() {
    const { teamLeader, view } = this.props;
    // const picture = this.props.pictureURL
    const renderLockButton = () => {
      if (view === "teamLeaderView") {
        return (
          <Button className="lockButton" type="primary">
            LOCK TEAM
          </Button>
        );
      }
    };

    if (this.state.profileClick) {
      return (
        <Redirect
          to={{
            pathname: "/Profile",
            state: { userID: this.props.teamLeader._id },
          }}
        />
      );
    }

    return (
      <div>
        <Card className="teamMemberCard">
          <div className="memberInfo">
            <div className="leaderIconContainer">
              <StarTwoTone twoToneColor="#eb2f96" className="leaderIcon" />
              <i>Team Leader</i>
            </div>
            <Meta
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size={60}
                />
              }
              title={teamLeader.name}
              onClick={this.handleProfileClick}
            />
          </div>
          <div className="memberButtonsContainer">
            {false && renderLockButton()}
          </div>
          <div className="teamLeaderDescription">{teamLeader.description}</div>
        </Card>
      </div>
    );
  }
}

export default TeamLeader;
