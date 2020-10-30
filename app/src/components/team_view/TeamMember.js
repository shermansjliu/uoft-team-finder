import React from 'react'
import EditNickNameButton from './EditNickNameButton'
import KickButton from './KickButton'
import MakeLeaderButton from './MakeLeaderButton'

class TeamMember extends React.Component {
    render() {
        const {member, currentUser, view} = this.props
        // const picture = this.props.pictureURL

        const renderLeaderButtons = () => {
            return [<MakeLeaderButton/>, <KickButton/>]
        }
        
        return (
            <div>
                <hr/>
                <h4>{member.name}</h4>
                {view === "teamLeaderView" && renderLeaderButtons()}
                {currentUser.userID === member.userID && <EditNickNameButton/>}
                <hr/>
            </div>
        );
    }
}

export default TeamMember