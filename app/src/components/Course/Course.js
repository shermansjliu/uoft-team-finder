import React, { Component } from "react";
import { Layout, Row, Col, Input } from "antd";
import TeamCard from "./TeamCard";
import { SearchOutlined } from "@ant-design/icons";
import HomeViewFooter from "./CourseFooter";
import "../../App.css";
import "./index.css";

const { Sider, Content } = Layout;

export default class Course extends Component {
  handleInputChange = (e) => {
    this.setState({ searchRes: e.target.value });
    console.log(this.state.searchRes);
  };
  constructor(props) {
    super(props);

    this.state = {
      searchRes: "",
      className: "CSC236",
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
          members: [],
          capacity: 4,
        },
        {
          teamName: "League of Legends",
          members: [],
          capacity: 4,
        },
        {
          teamName: "March March",
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
              {this.state.className}
            </h1>
            <Input
              className="searchBar"
              value={this.state.searchRes}
              size="large"
              onChange={this.handleInputChange}
              placeholder="search team name"
              prefix={<SearchOutlined />}
            />
            <Row gutter={16}>
              {this.state.teams.map((team) => {
                return (
                  <Col span={8}>
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
