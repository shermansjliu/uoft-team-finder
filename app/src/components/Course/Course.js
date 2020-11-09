import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import TeamCard from "./TeamCard";
import SearchBar from "./SearchBar";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import Sidebar from "../StandardLayout/Sidebar";
import "../../App.css";
import "./index.css";

const { Content } = Layout;

export default class Course extends Component {
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
          teamName: "Love Live Laugh",
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

  render() {
    let regex = RegExp(`${this.state.searchRes}`, "gi");
    const cards = this.state.teams.filter((team) => {
      return regex.test(team.teamName);
    });
    return (
      <div>
        <Layout className="homeViewContainer theme-content">
          <Sidebar image={""} />
          <Content hasSider={true} className="homeViewContent">
            <h1 className="courseCode theme-title">{this.state.courseCode}</h1>
            <SearchBar
              searchRes={this.state.searchRes}
              handleInputChange={this.handleInputChange}
            />
            <Row gutter={16}>
              {cards.map((team) => {
                return (
                  <Col key={uuid()} span={8}>
                    <Link to="/Team">
                      <div>
                        <TeamCard
                          teamName={team.teamName}
                          members={team.members}
                          capacity={team.capacity}
                        />
                      </div>
                    </Link>
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
