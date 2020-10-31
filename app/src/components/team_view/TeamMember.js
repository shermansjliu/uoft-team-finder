import React from 'react'
import EditNickNameButton from './EditNickNameButton'
import KickButton from './KickButton'
import MakeLeaderButton from './MakeLeaderButton'
import {Card, Avatar} from 'antd'
import './style.css'

const {Meta} = Card
class TeamMember extends React.Component {
    render() {
        const {member, currentUser, view} = this.props
        // const picture = this.props.pictureURL

        const renderLeaderButtons = () => {
            return [<MakeLeaderButton/>, <KickButton/>]
        }
        
        return (
            <div>
                {/* <Card title={member.name}>  
                    {view === "teamLeaderView" && renderLeaderButtons()}
                    {currentUser.userID === member.userID && <EditNickNameButton/>}
                </Card> */}
                <Card className="teamMemberCard">
                    <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={member.name}
                    description="This is the description"
                    />
                </Card>
                
            </div>
        );
    }
}

export default TeamMember