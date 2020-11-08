import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;
class TeamDescription extends React.Component {
  render() {
    const { teamDescription, isLeaderView, setDescription } = this.props;

    return (
      <div>
        {isLeaderView ? (
          <Paragraph
            className="teamDescription"
            editable={{ onChange: setDescription, maxLength: 500 }}
          >
            {teamDescription}
          </Paragraph>
        ) : (
          <Paragraph className="teamDescription">{teamDescription}</Paragraph>
        )}
      </div>
    );
  }
}

export default TeamDescription;
