import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import TeamCard from "./TeamCard";
import HomeViewFooter from "./CourseFooter";
import "../../App.css";
import "./index.css";

const { Sider, Content } = Layout;

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Layout className="homeViewContainer">
          <Sider></Sider>

          <Content hasSider={true} className="homeViewContent">
            <h1 className="courseCode">{this.state.className}</h1>
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
