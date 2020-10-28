import React from 'react'
import Member from './Member'

class MemberTable extends React.Component {

    render() {
        const { view, teamLeaderID, currentUser, members } = this.props 

        const teamLeader = members.filter(member => member.userID === teamLeaderID)[0]
        const teamMembers = members.filter(member => member.userID !== teamLeaderID)

        return (
            <div>
                <h2> Team Members: </h2>

                <Member 
                    // display team leader first
                    name={teamLeader.name}
                    isTeamLeader={true}
                />

                {teamMembers.map((member) => 
                    // display teammates
                    <Member key={member.userID} 
                            name={member.name} 
                            isTeamLeader={false} 
                    />
                )}
                
            </div>
        );
    }
}

export default MemberTable