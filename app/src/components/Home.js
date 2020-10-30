import React, { Component } from "react";
import { Layout, Space, Typography, Menu, Divider } from "antd";
import { Link } from "react-router-dom";
import TeamCard from "./TeamCard";
import { SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { User, Group } from "grommet-icons";
import "../App.css";

const { Sider, Content, Footer } = Layout;
const { Title } = Typography;
class Home extends Component {
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
    return (
      <div>
        <Layout className="homeViewContainer">
          <Sider>
            <div className="homeViewSideMenu">
              <div>
                <Title className="classTitle" level={2}>
                  CSC236
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
              <footer className="homeViewFooter">
                <ul>
                  <Link to="/Setting">
                    <li className="footerItem">
                      <SettingOutlined />
                    </li>
                  </Link>
                  <Link to="/Team">
                    <li className="footerItem">
                      <Group />
                    </li>
                  </Link>
                  <Link>
                    <li className="footerItem">
                      <User />
                    </li>
                  </Link>
                </ul>
              </footer>
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

export default Home;
