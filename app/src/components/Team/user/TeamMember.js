import React from "react";
import { Card, Avatar, Button } from "antd";
import { Redirect } from "react-router-dom";
import "./style.css";

const { Meta } = Card;
class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileClick: false };
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  handleProfileClick() {
    this.setState({ profileClick: true });
  }

  render() {
    const {
      member,
      view,
      handleKickRequest,
      handleMakeLeaderRequest,
    } = this.props;

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

    if (this.state.profileClick) {
      return (
        <Redirect
          to={{
            pathname: "/Profile",
            state: { userID: this.props.member._id },
          }}
        />
      );
    }

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
              onClick={this.handleProfileClick}
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
