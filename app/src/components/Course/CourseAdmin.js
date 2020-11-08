import React, { Component } from "react";
import { Layout, Space, Table } from "antd";
import SearchBar from "./SearchBar";

import "../../App.css";
import "./index.css";

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
    console.log(this.state.searchRes);
  };

  handleDeleteTeam = (e) => {
    const deletedTeamId = e.target;
    console.log(e.target);
    //   const newTeams = this.state.teams.filter(team => {
    //   return team.
    //   })
    //   this.setState()
  };
  handleEditTeam = (e) => {};

  render() {
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
        let regex = RegExp(`${this.state.searchRes}`, "gi");
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
        render: () => {
          return (
            <Space size="middle">
              <a onClick={this.handleEditTeam}>Edit</a>
              <a onClick={this.handleDeleteTeam}>Delete</a>
            </Space>
          );
        },
      },
    ];

    return (
      <Layout className="homeViewContainer theme-background-color">
        <Sider></Sider>

        <Content hasSider={true}>
          <h1 className="courseCode green-dark-title">
            {this.state.courseCode}
          </h1>
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
