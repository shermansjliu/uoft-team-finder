import React from 'react'
import MemberTable from './MemberTable'

class Team extends React.Component {

    render() {
        /* ----------- HARD-CODED DATA ------------- */
        /* BELOW DATA WILL BE PASSED IN FROM HOME VIEW */
        //
        // three types of current users, will have different views: 
        //      1) a team member of the team
        //      2) the team leader of the team
        //      3) other users not in the team
        const currentUser = {userID: "SpectatorID", name: "Spectator"}

        const teamLeaderID = "ShermanID"

        const members = [ 
            // list of users
            {userID: "DavidID", name: "David"},
            {userID: "ShermanID", name: "Sherman"},
            {userID: "QuincyID", name: "Quincy"},
            {userID: "JesseID", name: "Jesse"},
        ]  

        const teamCapacity = 4

        /* ------------------------------------------ */

        let view = ""
        if (!members.some(member => currentUser.userID === member.userID)){
            view = "otherUserView"
        } else if (currentUser.userID === teamLeaderID) {
            view = "teamLeaderView"
        } else {
            view = "teamMemberView"
        }

        return (
            <div>
                <h1>{view}</h1>
                <MemberTable
                    view= {view}
                    teamLeaderID={teamLeaderID}
                    currentUser={currentUser}
                    members={members}
                />
                <h2> Capacity: ({members.length}/{teamCapacity})</h2>
            </div>
        );
        
    }
}

export default Team

