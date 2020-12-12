import React from "react";
import MemberTable from "./MemberTable";
import TeamName from "./TeamName";
import TeamDescription from "./TeamDescription";
import { Layout } from "antd";
import { UserOutlined, TeamOutlined, LogoutOutlined } from "@ant-design/icons";

import "./style.css";
import AdminLayout from "../../AdminLayout/AdminLayout";
import {getAllUsers} from "../../../actions/users";
import {getAllCourses} from "../../AdminGrid/action";

import { ENDPOINT } from "../../../requests";
import axios from "axios";

const { Sider, Content } = Layout;

class AdminTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { userID: "ShermanID", name: "Sherman" },
      users: [],
      courses: [],
      teamLeaderID: "ShermanID",
      members: [
        {
          _id: "ShermanID",
          name: "Sherman",
          description: "REEEEEEEEEEEEEEEE",
        },
      ],
      teamName: "",
      teamDescription: "",
      teamCapacity: 0,
      view: "teamLeaderView",
    };
    this.addMember = this.addMember.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
    this.changeLeader = this.changeLeader.bind(this);
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setCapacity = this.setCapacity.bind(this);
    getAllUsers(this);
    getAllCourses(this)
  }

  async componentDidMount() {
    try {
      // team id received as a prop
      const team = await axios.get(
        `${ENDPOINT}/api/teams/5fd392d05a786804334140dc`,
        {
          method: "get",
        }
      );

      // currentUser id received from session
      const currentUser = await axios.get(
        `${ENDPOINT}/api/users/5fd28e27386dd75b03af2774`,
        {
          method: "get",
        }
      );
      this.setState({
        teamID: team.data._id,
        currentUser: currentUser.data,
        teamLeaderID: team.data.teamLeader._id,
        members: team.data.members,
        teamName: team.data.teamName,
        teamDescription: team.data.teamDescription,
        teamCapacity: team.data.teamCapacity,
      });
    } catch (err) {
      console.log(err);
    }
  }

  addMember(newMember) {
    if (
      !this.state.members.some(
        (member) => this.state.currentUser._id === member._id
      )
    ) {
      axios.put(
        `${ENDPOINT}/api/teams/add/${this.state.teamID}/${newMember._id}`,
        {
          method: "put",
        }
      );
      this.setState((prevState) => ({
        members: [...prevState.members, newMember],
      }));
    }
  }

  deleteMember(rmMember) {
    axios.put(
      `${ENDPOINT}/api/teams/delete/${this.state.teamID}/${rmMember._id}`,
      {
        method: "put",
      }
    );
    this.setState((prevState) => ({
      members: prevState.members.filter(
        (member) => rmMember._id !== member._id
      ),
    }));
  }

  changeLeader(newLeader) {
    axios.put(
      `${ENDPOINT}/api/teams/new_leader/${this.state.teamID}/${newLeader._id}`,
      {
        method: "put",
      }
    );
    this.setState({ teamLeaderID: newLeader._id });
  }

  setName(newName) {
    if (newName === "") {
      alert("Name cannot be empty!");
    } else {
      axios.put(
        `${ENDPOINT}/api/teams/${this.state.teamID}/teamName/${newName}`,
        {
          method: "put",
        }
      );
      this.setState({ teamName: newName.toUpperCase() });
    }
  }

  setDescription(newDescription) {
    axios.put(
      `${ENDPOINT}/api/teams/${this.state.teamID}/teamDescription/${newDescription}`,
      {
        method: "put",
      }
    );
    this.setState({ teamDescription: newDescription });
  }

  setCapacity(newCapacity) {
    axios.put(
      `${ENDPOINT}/api/teams/${this.state.teamID}/teamCapacity/${newCapacity}`,
      {
        method: "put",
      }
    );
    this.setState({ teamCapacity: newCapacity });
  }

  render() {
    if (this.state.view === "") {
      this.initView();
    }

    return (
      <AdminLayout
        app = {this.props.app}
        users = {this.state.users}
        courses = {this.state.courses}
        content={
          <div>
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
    );
  }
}

export default AdminTeam;
