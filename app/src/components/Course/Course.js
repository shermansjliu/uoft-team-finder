import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import TeamCard from "./TeamCard";
import SearchBar from "./SearchBar";
import uuid from "react-uuid";
import "../../App.css";
import {checkSession} from "../../actions/users"
import "./index.css";
import axios from "axios"
import {ENDPOINT} from "../requests"
import StandardLayout from "../StandardLayout/layout";


const { Content } = Layout;


export default class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchRes: "",
      courseCode: "CSC418",
      teams: []

    };
  }

  async componentDidMount() {
    checkSession((this))
    try {
      let courseCode = this.props.location.state.courseCode
      courseCode = courseCode.replace(/\s/g, '');
      courseCode = courseCode.toUpperCase()
      console.log(courseCode)
      const response = await axios.get(`${ENDPOINT}/api/courses/${courseCode}`)
      const data = response.data

      const teams = data.teams.map(team=> (
          {
            teamName:team.teamName,
            members: team.members,
            capacity: team.teamCapacity,
            teamID: team._id

          }
      ))
      this.setState({teams:teams, courseCode: courseCode})
    }catch(error){
      console.log("Could not get course ",error)
    }
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
      <StandardLayout
        app={this.props.app}
        content={
          <div className="homeViewContent">
            <h1 className="courseCode theme-title">{this.state.courseCode}</h1>
            <SearchBar
              searchRes={this.state.searchRes}
              handleInputChange={this.handleInputChange}
            />
            <Row gutter={16}>
              {cards.map((team) => {
                return (
                  <Col key={uuid()} span={8}>
                    <div>
                      <TeamCard
                          app={this}
                          teamID={team.teamID}
                        teamName={team.teamName}
                        members={team.members}
                        capacity={team.capacity}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        }
      />
    );
  }
}
