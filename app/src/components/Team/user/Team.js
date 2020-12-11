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
import StandardLayout from "../../StandardLayout/layout";

const { Sider, Content } = Layout;
const { Title } = Typography;

class Team extends React.Component {
  constructor(props) {
    super(props);
    const team_id = this.props.location.state.teamID
    alert(team_id)
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
      currentUser: {
        userID: "ShermanID",
        name: "Sherman",
        description: "REEEEEEEEEEEEEE",
      },
      teamLeaderID: "ShermanID",
      members: [
        // list of users
        {
          userID: "DavidID",
          name: "David",
          description: "Radiohead is the best",
        },
        {
          userID: "ShermanID",
          name: "Sherman",
          description: "REEEEEEEEEEEEEE",
        },
        {
          userID: "QuincyID",
          name: "Quincy",
          description: "Yasuo happy happy hahappy",
        },
        { userID: "JesseID", name: "Jesse", description: "LALALALALLALALALA" },
      ],
      teamName: "THE JOHN WICKS",
      teamDescription: "We seek revenge for our dogs",
      teamCapacity: 4,
      view: "",
    };
    this.updateView = this.updateView.bind(this);
    this.addMember = this.addMember.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
    this.changeLeader = this.changeLeader.bind(this);
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setCapacity = this.setCapacity.bind(this);
  }

  initView() {
    this.setState({ view: this.updateView() });
  }

  updateView() {
    if (
      !this.state.members.some(
        (member) => this.state.currentUser.userID === member.userID
      )
    ) {
      return "otherUserView";
    } else if (this.state.currentUser.userID === this.state.teamLeaderID) {
      return "teamLeaderView";
    } else {
      return "teamMemberView";
    }
  }

  addMember(newMember) {
    if (
      !this.state.members.some(
        (member) => this.state.currentUser.userID === member.userID
      )
    ) {
      this.setState(
        (prevState) => ({
          members: [...prevState.members, newMember],
        }),
        () => this.setState({ view: this.updateView() })
      );
    }
  }

  deleteMember(rmMember) {
    this.setState(
      (prevState) => ({
        members: prevState.members.filter(
          (member) => rmMember.userID !== member.userID
        ),
      }),
      () => this.setState({ view: this.updateView() })
    );
  }

  changeLeader(newLeader) {
    this.setState({ teamLeaderID: newLeader.userID }, () =>
      this.setState({ view: this.updateView() })
    );
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
        <StandardLayout
          app={this.props.app}
          content={
            <div className="teamViewContent">
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
            </div>
          }
        />
      </div>
    );
  }
}

export default Team;
