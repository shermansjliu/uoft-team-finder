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

import { ENDPOINT } from "../../../requests";
import axios from "axios";

const { Sider, Content } = Layout;
const { Title } = Typography;

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        _id: "ShermanID",
        name: "Sherman",
        description: "REEEEEEEEEEEEEE",
      },
      teamLeaderID: "ShermanID",
      members: [
        // list of users
        {
          _id: "DavidID",
          name: "David",
          description: "Radiohead is the best",
        },
        {
          _id: "ShermanID",
          name: "Sherman",
          description: "REEEEEEEEEEEEEE",
        },
        {
          _id: "QuincyID",
          name: "Quincy",
          description: "Yasuo happy happy hahappy",
        },
        { _id: "JesseID", name: "Jesse", description: "LALALALALLALALALA" },
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

  initView() {
    this.setState({ view: this.updateView() });
  }

  updateView() {
    if (
      !this.state.members.some(
        (member) => this.state.currentUser._id === member._id
      )
    ) {
      return "otherUserView";
    } else if (this.state.currentUser._id === this.state.teamLeaderID) {
      return "teamLeaderView";
    } else {
      return "teamMemberView";
    }
  }

  addMember(newMember) {
    if (
      !this.state.members.some(
        (member) => this.state.currentUser._id === member._id
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
          (member) => rmMember._id !== member._id
        ),
      }),
      () => this.setState({ view: this.updateView() })
    );
  }

  changeLeader(newLeader) {
    this.setState({ teamLeaderID: newLeader._id }, () =>
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
          appState={this.state}
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
