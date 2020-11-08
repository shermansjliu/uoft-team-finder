import React from "react";
import { Card, Avatar, Button } from "antd";
import { StarTwoTone } from "@ant-design/icons";
import "./style.css";

const { Meta } = Card;

class TeamLeader extends React.Component {
  render() {
    const { teamLeader, view, members } = this.props;
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
          <div className="memberButtonsContainer">{renderLockButton()}</div>
        </Card>
      </div>
    );
  }
}

export default TeamLeader;
