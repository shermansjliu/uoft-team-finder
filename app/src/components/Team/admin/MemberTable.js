import React from "react";
import TeamMember from "./TeamMember";
import TeamLeader from "./TeamLeader";
import { Button, Statistic, Typography } from "antd";

import "./style.css";

const { Paragraph } = Typography;

class MemberTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddRequest = this.handleAddRequest.bind(this);
    this.handleRemoveRequest = this.handleRemoveRequest.bind(this);
    this.handleChangeLeaderRequest = this.handleChangeLeaderRequest.bind(this);
    this.handleChangeCapaRequest = this.handleChangeCapaRequest.bind(this);
  }

  handleAddRequest(newMember) {
    this.props.addMember(newMember);
  }

  handleRemoveRequest(rmMember) {
    if (this.props.teamLeaderID === rmMember.userID) {
      // the member to be removed is the team leader
      if (this.props.members.length > 1) {
        alert("You have to pick a new team leader first before you kick!");
      } else {
        alert("the team will be deleted");
        this.props.deleteMember(rmMember);
        // goes back to course view (list of teams)
      }
    } else {
      this.props.deleteMember(rmMember);
    }
  }

  handleChangeLeaderRequest(newLeader) {
    this.props.changeLeader(newLeader);
  }

  handleChangeCapaRequest(newCapacity) {
    let capacity = parseInt(newCapacity);
    if (capacity >= this.props.members.length && capacity <= 10) {
      this.props.setCapacity(capacity);
    } else {
      alert("Invalid capacity number");
    }
  }

  render() {
    const { teamLeaderID, members, teamCapacity } = this.props;

    const teamLeader = members.filter(
      (member) => member.userID === teamLeaderID
    )[0];
    const teamMembers = members.filter(
      (member) => member.userID !== teamLeaderID
    );

    const renderCapacity = () => {
      return (
        <Paragraph
          editable={{ onChange: this.handleChangeCapaRequest, maxLength: 2 }}
        >
          / {teamCapacity}
        </Paragraph>
      );
    };

    return (
      <div className="memberTableContainer">
        <h2> Team Members </h2>

        <TeamLeader
          teamLeader={teamLeader}
          handleKickRequest={this.handleRemoveRequest}
        />

        {teamMembers.map((member) => (
          <TeamMember
            key={member.userID}
            member={member}
            handleKickRequest={this.handleRemoveRequest}
            handleMakeLeaderRequest={this.handleChangeLeaderRequest}
          />
        ))}

        <Statistic
          className="teamCapacity"
          value={members.length}
          suffix={renderCapacity()}
        />
      </div>
    );
  }
}

export default MemberTable;
