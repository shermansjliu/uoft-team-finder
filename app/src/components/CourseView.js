import React, { Component } from "react";
import { Layout, Space, Typography, Divider } from "antd";
import TeamCard from "./TeamCard";
import HomeViewFooter from "./CourseViewFooter";


import "../App.css";
import {withRouter} from "react-router-dom";

const { Sider, Content } = Layout;
const { Title } = Typography;
 class Course extends Component {
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
      ],
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Layout className="homeViewContainer">
          <Sider>
            <div className="homeViewSideMenu">
              <div>
                <Title className="classTitle" level={2}>
                  {this.state.className}
                </Title>
                <Title className="totalTeams" level={3}>
                  {" "}
                  Teams: 10
                </Title>

                <Space direction="vertical">
                  <Title level={5}> Project: 5</Title>
                  <Title level={5}> Study: 5</Title>
                </Space>
              </div>
              <HomeViewFooter />
            </div>
          </Sider>
          <Content hasSider={true} className="homeViewContent">
            {this.state.teams.map((team) => {
              return (
                <div>
                  <TeamCard
                    teamName={team.teamName}
                    members={team.members}
                    capacity={team.capacity}
                  />
                  <Divider className="teamCardDivider" />
                </div>
              );
            })}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Course)
