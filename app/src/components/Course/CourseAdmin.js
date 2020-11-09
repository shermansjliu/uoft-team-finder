import React, { Component } from "react";
import { Layout, Space, Table } from "antd";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

import "../../App.css";
import "./index.css";
import Sidebar from "../StandardLayout/Sidebar";

const { Sider, Content } = Layout;

export default class CourseAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchRes: "",
      courseCode: "CSC236",
      teams: [
        {
          teamName: "The John Wicks",
          teamLeader: "John Wick",
          members: [
            { userID: "DavidID", name: "David" },
            { userID: "ShermanID", name: "Sherman" },
            { userID: "QuincyID", name: "Quincy" },
            { userID: "JesseID", name: "Jesse" },
          ],
          capacity: 4,
          teamId: 0,
        },
        {
          teamName: "BA Forever",
          teamLeader: "Daveedo",
          members: [],
          capacity: 4,
          teamId: 1,
        },
        {
          teamName: "League of Legends",
          teamLeader: "Mike",
          members: [],
          capacity: 4,
          teamId: 2,
        },
        {
          teamName: "March March",
          teamLeader: "Sherman",
          members: [],
          capacity: 4,
          teamId: 4,
        },
        {
          teamName: "March March",
          teamLeader: "Quincy",
          members: [
            { userID: "QuincyID", name: "Quincy" },
            { userID: "JesseID", name: "Jesse" },
          ],
          capacity: 4,
          teamId: 5,
        },
        {
          teamName: "March March",
          teamLeader: "Jesse",
          members: [
            { userID: "QuincyID", name: "Quincy" },
            { userID: "JesseID", name: "Jesse" },
          ],
          capacity: 4,
          teamId: 6,
        },
        {
          teamName: "March March",
          teamLeader: "Sherman",
          members: [],
          capacity: 4,
          teamId: 3,
        },
      ],
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchRes: e.target.value });
  };

  handleDeleteTeam = (key) => {
    const { teamId: deletedTeamId } = key;
    const newTeams = this.state.teams.filter((team) => {
      return team.teamId !== deletedTeamId;
    });
    this.setState({ teams: newTeams });
  };

  render() {
    let regex = RegExp(`${this.state.searchRes}`, "gi");
    const data = this.state.teams
      .map((team, index) => {
        const { teamName, teamLeader, members, capacity, teamId } = team;
        return {
          key: index + 1,
          teamLeader: teamLeader,
          teamName: teamName,
          teamId: teamId,
          members: `${members.length}/${capacity}`,
        };
      })
      .filter((team, index) => {
        return regex.test(team.teamName);
      });

    const columns = [
      {
        title: "Team Name",
        dataIndex: "teamName",
        key: "teamName",
      },
      {
        title: "Team Leader",
        dataIndex: "teamLeader",
        key: "teamLeader",
      },

      {
        title: "Members",
        dataIndex: "members",
        key: "members",
      },
      {
        title: "Id",
        dataIndex: "teamId",
        key: "teamId",
      },
      {
        title: "Action",
        key: "action",
        render: (record) => {
          return (
            <Space size="middle">
              <Link to="/teamAdmin">
                {/* Goes to a specific teamAdmin page based on the teamId 
                This bevahour is not possible with react-router and so it goes to a default page for now*/}
                <a href="#" onClick={this.handleEditTeam}>
                  Edit
                </a>
              </Link>
              <a href="#" onClick={() => this.handleDeleteTeam(record)}>
                Delete
              </a>
            </Space>
          );
        },
      },
    ];

    return (
      <Layout className="homeViewContainer theme-content">
        <Sidebar />
        <Content hasSider={true}>
          <h1 className="courseCode theme-title">{this.state.courseCode}</h1>
          <SearchBar
            searchRes={this.state.searchRes}
            handleInputChange={this.handleInputChange}
          />
          <Table
            className="courseAdminTable"
            columns={columns}
            dataSource={data}
          >
            {" "}
          </Table>
        </Content>
      </Layout>
    );
  }
}
