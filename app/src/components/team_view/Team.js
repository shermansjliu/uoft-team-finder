import React from 'react'
import MemberTable from './MemberTable'
import { Layout, Space, Typography, Divider } from "antd";

import './style.css'

const { Sider, Content } = Layout;
const { Title } = Typography;

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
            currentUser: {userID: "ShermanID", name: "Sherman"},
            teamLeaderID: "ShermanID",
            members: [ 
                // list of users
                {userID: "DavidID", name: "David"},
                {userID: "ShermanID", name: "Sherman"},
                {userID: "QuincyID", name: "Quincy"},
                {userID: "JesseID", name: "Jesse"},
            ],
            teamName: "THE JOHN WICKS",
            teamDescription: "We seek revenge for our dogs",
            teamCapacity: 5,
            view:""
        }
        this.updateView = this.updateView.bind(this)
        this.addMember = this.addMember.bind(this)
        this.deleteMember = this.deleteMember.bind(this)
        this.changeLeader = this.changeLeader.bind(this)
    }

    initView () {
        this.setState({view: this.updateView()})
    }

    updateView (){
        if (!this.state.members.some(member => this.state.currentUser.userID === member.userID)){
            return "otherUserView"
        } else if (this.state.currentUser.userID === this.state.teamLeaderID) {
            return "teamLeaderView"
        } else {
            return "teamMemberView"
        }
    }

    addMember (newMember) {
        if(!this.state.members.some(member => this.state.currentUser.userID === member.userID)){
            this.setState(prevState => ({
                members: [...prevState.members, newMember],    
            }), () => this.setState({view: this.updateView()}))
        }      
    }

    deleteMember (rmMember) {
        this.setState(prevState => ({
            members: prevState.members.filter(member => rmMember.userID !== member.userID)
        }), () => this.setState({view: this.updateView()}))
    }   

    changeLeader (newLeader) {
        this.setState({teamLeaderID: newLeader.userID}, () => this.setState({view: this.updateView()}))
    }


    render() {

        if (this.state.view === "") {this.initView()}

        return (
            <div>
                <Layout className="teamViewContainer">
                    <Content hasSider={false} className="teamViewContent">
                        <h1 className="teamTitle">{this.state.teamName}</h1>
                        <p className="teamDescription">{this.state.teamDescription}</p>
                        <p style={{textAlign: "center"}}>({this.state.view})</p>
                        <MemberTable 
                            view= {this.state.view}
                            teamLeaderID={this.state.teamLeaderID}
                            teamCapacity={this.state.teamCapacity}
                            currentUser={this.state.currentUser}
                            members={this.state.members}
                            addMember={this.addMember}
                            deleteMember={this.deleteMember}
                            changeLeader={this.changeLeader}
                        />
                    </Content>
                </Layout>
            </div>
        );
        
    }
}

export default Team

