import React, { Component } from "react";
import { Table, Layout } from "antd";
import { data } from "./UserData.json";
import AdminLayout from "../AdminLayout/AdminLayout";

export default class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: data,
    };
  }
  render() {
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
    ];

    const data = this.state.userdata.map((team) => {
      console.log(team);
    });
    return <AdminLayout image={""} content={<Table columns={columns} />} />;
  }
}
