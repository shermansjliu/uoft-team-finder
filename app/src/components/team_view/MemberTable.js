import React from 'react'
import TeamMember from './TeamMember'
import TeamLeader from './TeamLeader'
import {Button, Statistic} from "antd"
import './style.css'

class MemberTable extends React.Component {
    constructor(props){
        super(props)
        this.handleAddRequest = this.handleAddRequest.bind(this)
        this.handleRemoveRequest = this.handleRemoveRequest.bind(this)
    }

    handleAddRequest (newMember) {
        this.props.addMember(newMember)
    }

    handleRemoveRequest (rmMember) {
        this.props.deleteMember(rmMember)
    }
    

    render() {
        const { view, teamLeaderID, currentUser, members } = this.props 

        const teamLeader = members.filter(member => member.userID === teamLeaderID)[0]
        const teamMembers = members.filter(member => member.userID !== teamLeaderID)


        const renderJoinOrLeaveButton = () => {
            if(view === "otherUserView") {
                return <Button className="joinLeaveButton" type="primary" onClick={() => this.handleAddRequest(currentUser)}> Join </Button>
            } else {
                return <Button className="joinLeaveButton" type="primary" onClick={() => this.handleRemoveRequest(currentUser)}> Leave </Button>
            }
        }

        return (
            <div className="memberTableContainer">
                <h2> Team Members </h2>
                
                <TeamLeader teamLeader={teamLeader} view={view} currentUser={currentUser}/>

                {teamMembers.map((member) => 
                    <TeamMember key={member.userID} member={member} view={view}
                                currentUser={currentUser}
                    />
                )}

                <Statistic className="teamCapacity" value={members.length} suffix={`/${this.props.teamCapacity}`} />
                {renderJoinOrLeaveButton()}

            </div>
        );
    }
}

export default MemberTable