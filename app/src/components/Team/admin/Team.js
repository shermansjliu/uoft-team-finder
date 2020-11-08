import React from "react";
import MemberTable from "./MemberTable";
import TeamName from "./TeamName";
import TeamDescription from "./TeamDescription";
import { Layout, Space, Typography, Divider, Button } from "antd";
import {
  EditFilled,
  UserOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import "./style.css";

const { Sider, Content } = Layout;
const { Title } = Typography;

class Team extends React.Component {
  constructor(props) {
    super(props);
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
      currentUser: { userID: "ShermanID", name: "Sherman" },
      teamLeaderID: "ShermanID",
      members: [
        // list of users
        { userID: "DavidID", name: "David" },
        { userID: "ShermanID", name: "Sherman" },
        { userID: "QuincyID", name: "Quincy" },
        { userID: "JesseID", name: "Jesse" },
      ],
      teamName: "THE JOHN WICKS",
      teamDescription: "We seek revenge for our dogs",
      teamCapacity: 4,
      view: "teamLeaderView",
    };
    this.addMember = this.addMember.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
    this.changeLeader = this.changeLeader.bind(this);
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setCapacity = this.setCapacity.bind(this);
  }

  addMember(newMember) {
    if (
      !this.state.members.some(
        (member) => this.state.currentUser.userID === member.userID
      )
    ) {
      this.setState((prevState) => ({
        members: [...prevState.members, newMember],
      }));
    }
  }

  deleteMember(rmMember) {
    this.setState((prevState) => ({
      members: prevState.members.filter(
        (member) => rmMember.userID !== member.userID
      ),
    }));
  }

  changeLeader(newLeader) {
    this.setState({ teamLeaderID: newLeader.userID });
  }

  setName(newName) {
    if (newName === "") {
      alert("Name cannot be empty!");
    } else {
      this.setState({ teamName: newName.toUpperCase() });
    }
  }

  setDescription(newDescription) {
    this.setState({ teamDescription: newDescription });
  }

  setCapacity(newCapacity) {
    this.setState({ teamCapacity: newCapacity });
  }

  render() {
    if (this.state.view === "") {
      this.initView();
    }

    return (
      <div>
        <Layout className="teamViewContainer">
          <Sider
            className="teamViewSidebar"
            width={100}
            collapsible={true}
            collapsedWidth={0}
          >
            <div className="profilePictureContainer">
              <img
                className="profilePicture"
                src={
                  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }
              />
            </div>
            <div className="sideBarButtons">
              <UserOutlined />
              <TeamOutlined />
              <LogoutOutlined />
            </div>
          </Sider>
          <Content hasSider={true} className="teamViewContent">
            <TeamName
              teamName={this.state.teamName}
              isLeaderView={this.state.view === "teamLeaderView"}
              setName={this.setName}
            />
            <TeamDescription
              teamDescription={this.state.teamDescription}
              isLeaderView={this.state.view === "teamLeaderView"}
              setDescription={this.setDescription}
            />
            <MemberTable
              view={this.state.view}
              teamLeaderID={this.state.teamLeaderID}
              teamCapacity={this.state.teamCapacity}
              currentUser={this.state.currentUser}
              members={this.state.members}
              addMember={this.addMember}
              deleteMember={this.deleteMember}
              changeLeader={this.changeLeader}
              setCapacity={this.setCapacity}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Team;
