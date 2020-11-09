import React, { Component } from "react";
import { Table } from "antd";
import { data } from "./UserData.json";

export default class AdminUsers extends Component {
  render() {
    console.log(data);
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
    return <div></div>;
  }
}
