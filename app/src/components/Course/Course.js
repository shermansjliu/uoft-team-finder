import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import TeamCard from "./TeamCard";
import SearchBar from "./SearchBar";
import uuid from "react-uuid";
import "../../App.css";
import "./index.css";
import axios from "axios"
import endpoint, {ENDPOINT} from "../requests"
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
  // Sample returned teams obj  teams: [
  //         {
  //           teamName: "The John Wicks",
  //           members: [
  //             { userID: "DavidID", name: "David" },
  //             { userID: "ShermanID", name: "Sherman" },
  //             { userID: "QuincyID", name: "Quincy" },
  //             { userID: "JesseID", name: "Jesse" },
  //           ],
  //           capacity: 4,
  //           teamId: 0,
  //         },
  //         {
  //           teamName: "BA Forever",
  //           members: [],
  //           capacity: 4,
  //           teamId: 1,
  //         },
  //         {
  //           teamName: "League of Legends",
  //           members: [],
  //           capacity: 4,
  //           teamId: 2,
  //         },
  //         {
  //           teamName: "March March",
  //           members: [],
  //           capacity: 4,
  //           teamId: 4,
  //         },
  //         {
  //           teamName: "March March",
  //           members: [
  //             { userID: "QuincyID", name: "Quincy" },
  //             { userID: "JesseID", name: "Jesse" },
  //           ],
  //           capacity: 4,
  //           teamId: 5,
  //         },
  //         {
  //           teamName: "Love Live Laugh",
  //           members: [
  //             { userID: "QuincyID", name: "Quincy" },
  //             { userID: "JesseID", name: "Jesse" },
  //           ],
  //           capacity: 4,
  //           teamId: 6,
  //         },
  //         {
  //           teamName: "March March",
  //           members: [],
  //           capacity: 4,
  //           teamId: 3,
  //         },
  //       ]
  async componentDidMount() {
    try {

      const response = await axios.get(`${ENDPOINT}/api/courses/${this.state.courseCode}`,{ method: "get"})
      const data = response.data
      const teams = data.teams.map(team=> (
          {
            teamName:team.teamName,
            members: team.members,
            capacity: team.teamCapacity

          }
      ))
      this.setState({teams:teams})
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
