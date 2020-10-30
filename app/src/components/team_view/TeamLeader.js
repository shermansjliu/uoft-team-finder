import React from 'react'
import EditCapacityButton from './EditCapacityButton'
import EditTeamNameButton from './EditTeamNameButton'
import EditNickNameButton from './EditNickNameButton'

class TeamLeader extends React.Component {
    render() {
        const {teamLeader, currentUser, view} = this.props
        // const picture = this.props.pictureURL

        const renderLeaderButtons = () => {
            return [<EditCapacityButton/>, <EditTeamNameButton/>]
        }
        
        return (
            <div>
                <hr/>
                <h3> Team Leader!</h3>
                <h4>{teamLeader.name}</h4>
                {view === "teamLeaderView" && renderLeaderButtons()}
                {currentUser.userID === teamLeader.userID && <EditNickNameButton/>}
                <hr/>
            </div>
        );
    }
}

export default TeamLeader