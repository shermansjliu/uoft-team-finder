import { configConsumerProps } from 'antd/lib/config-provider';
import React from 'react';

class TeamDescription extends React.Component {
    state = {  }
    render() {
        return (
            <p className="teamDescription">{this.props.teamDescription}</p>
        );
    }
}

export default TeamDescription;