import React, { Component } from "react";
import { Layout, Space, Table } from "antd";
import SearchBar from "./SearchBar";
import "../../App.css";
import "./index.css";

const { Sider, Content } = Layout;
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
    title: "Id",
    dataIndex: "teamId",
    key: "teamId",
  },
  {
    title: "Members",
  },
  {
    title: "Action",
    key: "action",
    render: () => {
      <Space size="middle">
        <a>Edit</a>git
        <a>Delete</a>
      </Space>;
    },
  },
];

export default class CourseAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          teamName: "The John Wicks",
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
          teamId: 3,
        },
      ],
    };
  }

  render() {
    return (
      <Layout>
        <Sider></Sider>
        <SearchBar />
        <Content>
          <Table></Table>
        </Content>
      </Layout>
    );
  }
}
