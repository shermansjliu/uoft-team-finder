import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import InformationBar from "./InformationBar.js";
import TabTable from "./TabTable.js";

class Profile extends React.Component {
  state = {
    name: "Enter your name here.",
    major: "Enter your specialist or major here.",
    description: "Write something about you!",
    year: "3",
    cGPA: "",
    courses: [{ courseTitle: "CSC309" }, { courseTitle: "CSC373" }],
    teams: [{ teamName: "THE JOHN WICKS" }],
    exps: [{ expTitle: "CSC207", content: "Took it last year!" }],
  };

  render() {
    return (
      <Layout
        style={{
          height: "100vh",
        }}
      >
        {/* Left side bar */}
        <InformationBar
          infos={this}
          name={this.state.name}
          major={this.state.major}
          year={this.state.year}
          cGPA={this.state.cGPA}
          description={this.state.description}
        />
        {/* Right side bar */}
        <Layout
          style={{
            width: "70%",
            height: "100%",
            padding: 24,
          }}
        >
          <TabTable infos={this}></TabTable>
        </Layout>
      </Layout>
    );
  }
}

export default Profile;