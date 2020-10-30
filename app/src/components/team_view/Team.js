import React from 'react'
import MemberTable from './MemberTable'

class Team extends React.Component {
    
    constructor(props){
        super(props)
        /* ----------- HARD-CODED DATA ------------- */
        /* BELOW DATA WILL BE PASSED IN FROM HOME VIEW */
        //
        // three types of current users, will have different views: 
        //      1) a team member of the team
        //      2) the team leader of the team
        //      3) other users not in the team
        // const currentUser = {userID: "SpectatorID", name: "Spectator"}
        // const currentUser = {userID: "ShermanID", name: "Sherman"}
        this.state = {
            currentUser: {userID: "DenisID", name: "Denis"},
            teamLeaderID: "ShermanID",
            members: [ 
                // list of users
                {userID: "DavidID", name: "David"},
                {userID: "ShermanID", name: "Sherman"},
                {userID: "QuincyID", name: "Quincy"},
                {userID: "JesseID", name: "Jesse"},
            ],
            teamName: "The John Wicks", 
            teamDescription: "We seek revenge for our dogs",
            teamCapacity: 5,
            view:""
        }
        this.setView = this.setView.bind(this)
        this.addMember = this.addMember.bind(this)
        this.deleteMember = this.deleteMember.bind(this)
    }

    initView () {
        this.setState({view: this.setView(this.state.currentUser)})
    }

    setView (currentUser){
        if (!this.state.members.some(member => this.state.currentUser.userID === member.userID)){
            return "otherUserView"
        } else if (this.state.currentUser.userID === this.teamLeaderID) {
            return "teamLeaderView"
        } else {
            return "teamMemberView"
        }
    }

    addMember (newMember) {
        if(!this.state.members.some(member => this.state.currentUser.userID === member.userID)){
            this.setState(prevState => ({
                members: [...prevState.members, newMember],    
            }), () => this.setState({view: this.setView(this.state.currentUser)}))
        }      
    }

    deleteMember (rmMember) {
        this.setState(prevState => ({
            members: prevState.members.filter(member => rmMember.userID !== member.userID)
        }), () => this.setState({view: this.setView(this.state.currentUser)}))
    }   


    render() {

        if (this.state.view === "") {this.initView()}

        return (
            <div>
                <h1>{this.state.view}</h1>
                <MemberTable
                    view= {this.state.view}
                    teamLeaderID={this.state.teamLeaderID}
                    currentUser={this.state.currentUser}
                    members={this.state.members}
                    addMember={this.addMember}
                    deleteMember={this.deleteMember}
                />
                <h2> Capacity: ({this.state.members.length}/{this.state.teamCapacity})</h2>
            </div>
        );
        
    }
}

export default Team

