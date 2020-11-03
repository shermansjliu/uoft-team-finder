import React from 'react'
import EditCapacityButton from './EditCapacityButton'
import EditTeamNameButton from './EditTeamNameButton'
import EditNickNameButton from './EditNickNameButton'
import {Card, Avatar, Button} from 'antd'
import {StarTwoTone} from '@ant-design/icons'
import './style.css'

const {Meta} = Card


class TeamLeader extends React.Component {
    render() {
        const {teamLeader, currentUser, view, handleChangeTitleRequest, handleCapacityRequest} = this.props
        // const picture = this.props.pictureURL
        
        return (
            <div>
                <Card className="teamMemberCard" hoverable onClick={() => alert("to profile view")}>
                    <StarTwoTone twoToneColor="#eb2f96" className="leaderIcon"/>
                    <i>Team Leader</i>
                    <Meta 
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={teamLeader.name}
                    description="This is the description"
                    />
                    {/* {view === "teamLeaderView" && renderLeaderButtons()} */}
                </Card>
            </div>
        );
    }
}

export default TeamLeader