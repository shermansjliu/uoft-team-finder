import React from 'react'
import TeamMember from './TeamMember'
import TeamLeader from './TeamLeader'
import JoinButton from './JoinButton'
import LeaveButton from './LeaveButton'

class MemberTable extends React.Component {
    constructor(props){
        super(props)
        this.handleJoinRequest = this.handleJoinRequest.bind(this)
        this.handleLeaveRequest = this.handleLeaveRequest.bind(this)
    }

    handleJoinRequest (newMember) {
        this.props.addMember(newMember)
    }

    handleLeaveRequest (rmMember) {
        this.props.deleteMember(rmMember)
    }
    

    render() {
        const { view, teamLeaderID, currentUser, members } = this.props 

        const teamLeader = members.filter(member => member.userID === teamLeaderID)[0]
        const teamMembers = members.filter(member => member.userID !== teamLeaderID)


        const renderJoinOrLeaveButton = () => {
            if(view === "otherUserView") {
                return <JoinButton handleJoinRequest={() => this.handleJoinRequest(currentUser)}/>
            } else {
                return <LeaveButton handleLeaveRequest={() => this.handleLeaveRequest(currentUser)}/>
            }
        }

        return (
            <div>
                <h2> Team Members: </h2>
                
                <TeamLeader teamLeader={teamLeader} view={view} currentUser={currentUser}/>

                {teamMembers.map((member) => 
                    <TeamMember key={member.userID} member={member} view={view}
                                currentUser={currentUser}
                    />
                )}

                {renderJoinOrLeaveButton()}

            </div>
        );
    }
}

export default MemberTable