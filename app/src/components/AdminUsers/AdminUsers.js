import React, { Component } from "react";
import { Table, Layout } from "antd";
import { data } from "./UserData.json";
import AdminLayout from "../AdminLayout/AdminLayout";
import uuid from "react-uuid";

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
        title: "User Id",
        dataIndex: "userId",
        key: "userId",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "Year",
        dataIndex: "year",
        key: "year",
      },
    ];

    const data = this.state.userdata.map((user, index) => {
      return {
        key: index + 1,
        userId: user.username,
        name: user.name,
        year: user.year,
      };
    });
    console.log(data);
    return (
      <AdminLayout
        image={""}
        content={<Table columns={columns} dataSource={data} />}
      />
    );
  }
}
