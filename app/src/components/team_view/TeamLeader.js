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
        const {teamLeader, currentUser, view} = this.props
        // const picture = this.props.pictureURL

        const renderLeaderButtons = () => {
            return [<EditCapacityButton/>, <EditTeamNameButton/>]
        }
        
        return (
            <div>
                {/* <Card>
                    <hr/>
                    <h3> Team Leader!</h3>
                    <h4>{teamLeader.name}</h4>
                    {view === "teamLeaderView" && renderLeaderButtons()}
                    {currentUser.userID === teamLeader.userID && <EditNickNameButton/>}
                    <hr/>
                </Card> */}
                <Card className="teamMemberCard">
                    <StarTwoTone twoToneColor="#eb2f96" className="leaderIcon"/>
                    <i>Team Leader</i>
                    <Meta 
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={teamLeader.name}
                    description="This is the description"
                    />
                </Card>
            </div>
        );
    }
}

export default TeamLeader