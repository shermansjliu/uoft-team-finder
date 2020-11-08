import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import TeamCard from "./TeamCard";
import SearchBar from "./SearchBar";
import uuid from "react-uuid";
import "../../App.css";
import "./index.css";

const { Sider, Content } = Layout;

export default class Course extends Component {
  handleInputChange = (e) => {
    this.setState({ searchRes: e.target.value });
  };
  constructor(props) {
    super(props);

    this.state = {
      searchRes: "",
      courseCode: "CSC236",
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
        },
        {
          teamName: "BA Forever",
          teamLeader: "Daveedo",
          members: [],
          capacity: 4,
        },
        {
          teamName: "League of Legends",
          teamLeader: "Mike",
          members: [],
          capacity: 4,
        },
        {
          teamName: "March March",
          teamLeader: "Sherman",
          members: [],
          capacity: 4,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Layout className="homeViewContainer theme-background-color">
          <Sider></Sider>

          <Content hasSider={true} className="homeViewContent">
            <h1 className="courseCode green-dark-title">
              {this.state.courseCode}
            </h1>
            <SearchBar
              searchRes={this.state.searchRes}
              handleInputChange={this.handleInputChange}
            />
            <Row gutter={16}>
              {this.state.teams.map((team) => {
                return (
                  <Col key={uuid()} span={8}>
                    <div>
                      <TeamCard
                        teamName={team.teamName}
                        members={team.members}
                        capacity={team.capacity}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}
