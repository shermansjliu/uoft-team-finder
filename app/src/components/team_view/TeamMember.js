import React from 'react'
import {Card, Avatar, Button} from 'antd'
import './style.css'

const {Meta} = Card
class TeamMember extends React.Component {
    render() {
        const {member, currentUser, view, handleKickRequest, handleMakeLeaderRequest} = this.props
        // const picture = this.props.pictureURL

        const renderLeaderButtons = () => {
            return [
            <Button className="kickButton" 
                type="primary"
                onClick={() => handleKickRequest(member)}>
                Kick
            </Button>, 
            <Button className="makeLeaderButton" 
                type="primary"
                onClick={() => handleMakeLeaderRequest(member)}>
                Make Leader
            </Button>]
        }
        
        return (
            <div>
                <Card className="teamMemberCard" hoverable>
                    <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={member.name}
                    description="This is the description"
                    onClick={() => alert("to profile view")}
                    />
                    {view === "teamLeaderView" && renderLeaderButtons()}
                    
                </Card>
                
            </div>
        );
    }
}

export default TeamMember