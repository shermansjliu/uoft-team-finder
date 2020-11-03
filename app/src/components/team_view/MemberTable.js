import React from 'react'
import TeamMember from './TeamMember'
import TeamLeader from './TeamLeader'
import {Button, Statistic, Typography} from "antd"

import './style.css'

const { Paragraph } = Typography;

class MemberTable extends React.Component {
    constructor(props){
        super(props)
        this.handleAddRequest = this.handleAddRequest.bind(this)
        this.handleRemoveRequest = this.handleRemoveRequest.bind(this)
        this.handleChangeLeaderRequest = this.handleChangeLeaderRequest.bind(this)
        this.handleChangeCapaRequest = this.handleChangeCapaRequest.bind(this)
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

    handleChangeCapaRequest (newCapacity) {
        let capacity = parseInt(newCapacity)
        if (capacity >= this.props.members.length && capacity <= 10){
            this.props.setCapacity(capacity)
        } else {
            alert("Invalid capacity number")
        }
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

        const renderCapacity = () => {
            if(view === "teamLeaderView"){
                return <Paragraph editable={{onChange: this.handleChangeCapaRequest, maxLength: 2}}>/ {teamCapacity}</Paragraph>
            } else {
                return <Paragraph>/ {teamCapacity}</Paragraph>
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

                <Statistic className="teamCapacity" value={members.length} suffix={renderCapacity()} />
                {renderLockButton()}
                {renderJoinOrLeaveButton()}

            </div>
        );
    }
}

export default MemberTable