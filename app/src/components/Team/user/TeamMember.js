import React from "react";
import { Card, Avatar, Button } from "antd";
import "./style.css";

const { Meta } = Card;
class TeamMember extends React.Component {
  render() {
    const {
      member,
      currentUser,
      view,
      handleKickRequest,
      handleMakeLeaderRequest,
    } = this.props;
    // const picture = this.props.pictureURL

    const renderLeaderButtons = () => {
      return [
        <Button
          className="kickButton"
          type="primary"
          onClick={() => handleKickRequest(member)}
        >
          KICK
        </Button>,
        <Button
          className="makeLeaderButton"
          type="primary"
          onClick={() => handleMakeLeaderRequest(member)}
        >
          MAKE LEADER
        </Button>,
      ];
    };

    return (
      <div>
        <Card className="teamMemberCard">
          <div className="memberInfo">
            <Meta
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size={60}
                  className="memberAvatar"
                />
              }
              title={member.name}
              onClick={() => alert("to profile view")}
            />
          </div>
          <div className="memberButtonsContainer">
            {view === "teamLeaderView" && renderLeaderButtons()}
          </div>
          <div className="memberDescription">{member.description}</div>
        </Card>
      </div>
    );
  }
}

export default TeamMember;
