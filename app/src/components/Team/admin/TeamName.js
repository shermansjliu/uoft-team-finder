import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

class TeamName extends React.Component {
  render() {
    const { teamName, isLeaderView, setName } = this.props;

    return (
      <div>
        {isLeaderView ? (
          <Title
            className="teamTitle"
            editable={{ onChange: setName, maxLength: 40 }}
          >
            {teamName}
          </Title>
        ) : (
          <Title className="teamTitle">{teamName}</Title>
        )}
      </div>
    );
  }
}

export default TeamName;
