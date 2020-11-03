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
        this.handleChangeLeaderRequest = this.handleChangeLeaderRequest.bind(this)
    }

    handleAddRequest (newMember) {
        this.props.addMember(newMember)
    }

    handleRemoveRequest (rmMember) {
        if(this.props.teamLeaderID === rmMember.userID && this.props.members.length > 1) {
            // the member to be removed is the team leader
            alert("You have to pick a new team leader first before you leave!")
        } else {
            this.props.deleteMember(rmMember)
        }
    }

    handleChangeLeaderRequest (newLeader) {
        this.props.changeLeader(newLeader)
    }
    

    render() {
        const { view, teamLeaderID, currentUser, members, teamCapacity} = this.props 

        const teamLeader = members.filter(member => member.userID === teamLeaderID)[0]
        const teamMembers = members.filter(member => member.userID !== teamLeaderID)


        const renderJoinOrLeaveButton = () => {
            if(view === "otherUserView") {
                return <Button className="joinLeaveButton" type="primary" onClick={() => this.handleAddRequest(currentUser)}> Join </Button>
            } else {
                return <Button className="joinLeaveButton" type="primary" onClick={() => this.handleRemoveRequest(currentUser)}> Leave </Button>
            }
        }
        
        const renderLockButton = () => {
            if(members.length === teamCapacity && view === "teamLeaderView") {
                return <Button className="lockButton">Lock Team</Button>
            }
        }

        return (
            <div className="memberTableContainer">
                <h2> Team Members </h2>
                
                <TeamLeader teamLeader={teamLeader} view={view} currentUser={currentUser}/>

                {teamMembers.map((member) => 
                    <TeamMember key={member.userID} member={member} view={view}
                                currentUser={currentUser} handleKickRequest={this.handleRemoveRequest}
                                handleMakeLeaderRequest={this.handleChangeLeaderRequest}
                    />
                )}

                <Statistic className="teamCapacity" value={members.length} suffix={`/${this.props.teamCapacity}`} />
                {renderLockButton()}
                {renderJoinOrLeaveButton()}

            </div>
        );
    }
}

export default MemberTable