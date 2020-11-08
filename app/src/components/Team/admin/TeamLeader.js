import React from "react";
import { Card, Avatar, Button } from "antd";
import { StarTwoTone } from "@ant-design/icons";
import "./style.css";

const { Meta } = Card;

class TeamLeader extends React.Component {
  render() {
    const { teamLeader, handleKickRequest } = this.props;
    // const picture = this.props.pictureURL
    const renderAdminButtons = () => {
      return [
        <Button
          className="kickButton"
          type="primary"
          onClick={() => handleKickRequest(teamLeader)}
        >
          KICK
        </Button>,
      ];
    };

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
              onClick={() => alert("to profile view")}
            />
          </div>
          <div className="memberButtonsContainer">{renderAdminButtons()}</div>
        </Card>
      </div>
    );
  }
}

export default TeamLeader;
