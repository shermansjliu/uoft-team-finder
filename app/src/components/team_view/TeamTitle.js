import { Divider } from 'antd';
import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

class TeamTitle extends React.Component {
    
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.setName(e.target.value)
    }
    
    render() {
        const {teamName, isLeaderView} = this.props

        return (
            <div>
                <h1 className="teamTitle">{teamName}</h1>
                {/* {isLeaderView ?  */}
                {/* <Paragraph editable={{ onChange: e => this.handleChange(e)}}>{teamName}</Paragraph> : */}
                {/* <Paragraph>{teamName}</Paragraph> */}
                {/* } */}
            </div>
            
        );
    }
}

export default TeamTitle;