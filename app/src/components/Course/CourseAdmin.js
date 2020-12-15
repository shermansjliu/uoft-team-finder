import React, {Component} from "react";
import {Layout, Space, Table} from "antd";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import axios from "axios"
import {ENDPOINT} from "../requests"
import "../../App.css";
import "./index.css";
import Sidebar from "../StandardLayout/Sidebar";
import AdminLayout from "../AdminLayout/AdminLayout";
import {checkSession, getAllUsers} from "../../actions/users";
import {getAllCourses} from "../AdminGrid/action";

const {Sider, Content} = Layout;

export default class CourseAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchRes: "",
            users: [],
            courses: [],
            courseCode: "CSC236",
            teams:[]
        };
        getAllUsers(this);
        getAllCourses(this)
    }

    async componentDidMount() {
        try {
            // const team_id = this.props.location.state.teamID
            let courseCode = this.props.location.state.courseCode
            courseCode = courseCode.replace(/\s/g, '');
            courseCode = courseCode.toUpperCase()
            console.log(courseCode)
            const res = await axios.get(`${ENDPOINT}/api/courses/${courseCode}`)
            // const res = await axios.get(`${ENDPOINT}/api/courses/CSC309`)
            const data = res.data
            console.log(res.data.teams[0])
            const teams = data.teams.map(team => (
                {
                    teamName: team.teamName,
                    teamLeader:team.teamLeader.username,
                    members: team.members,
                    capacity: team.teamCapacity,
                    teamId: team._id
                }
            ))
            this.setState({teams: teams, courseCode: courseCode})
        } catch (error) {
            console.log("Could not get course ", error)
        }

    }


    handleInputChange = (e) => {
        this.setState({searchRes: e.target.value});
    };

    handleDeleteTeam = async (key) => {
        const {teamId: deletedTeamId} = key;
        const newTeams = this.state.teams.filter((team) => {
            return team.teamId !== deletedTeamId;
        });
        console.log(deletedTeamId, "deletedTeamID")
        const res = await axios.delete(`${ENDPOINT}/api/teams/${deletedTeamId}`)
        if (res.status !== 200){
            console.log("course could not be deleted")
        }

        else{
            this.setState({teams: newTeams});
        }

    };

    render() {
        let regex = RegExp(`${this.state.searchRes}`, "gi");
        const data = this.state.teams
            .map((team, index) => {
                const {teamName, teamLeader, members, capacity, teamId} = team;
                return {
                    key: index + 1,
                    teamLeader: teamLeader,
                    teamName: teamName,
                    teamId: teamId,
                    members: `${members.length}/${capacity}`,
                };
            })
            .filter((team, index) => {
                return regex.test(team.teamName);
            });

        const columns = [
            {
                title: "Team Name",
                dataIndex: "teamName",
                key: "teamName",
            },
            {
                title: "Team Leader",
                dataIndex: "teamLeader",
                key: "teamLeader",
            },

            {
                title: "Members",
                dataIndex: "members",
                key: "members",
            },
            {
                title: "Id",
                dataIndex: "teamId",
                key: "teamId",
            },
            {
                title: "Action",
                key: "action",
                render: (record) => {
                    return (
                        <Space size="middle">
                            <Link to="/teamAdmin">
                                {/* Goes to a specific teamAdmin page based on the teamId
                This bevahour is not possible with react-router and so it goes to a default page for now*/}
                                <a href="#" onClick={this.handleEditTeam}>
                                    Edit
                                </a>
                            </Link>
                            <a href="#" onClick={() => this.handleDeleteTeam(record)}>
                                Delete
                            </a>
                        </Space>
                    );
                },
            },
        ];

        return (
            <AdminLayout
                app = {this.props.app}
                users = {this.state.users}
                courses = {this.state.courses}
                content={
                    <div>
                        <h1 className="courseCode theme-title">{this.state.courseCode}</h1>
                        <SearchBar
                            searchRes={this.state.searchRes}
                            handleInputChange={this.handleInputChange}
                        />
                        <Table
                            className="courseAdminTable"
                            columns={columns}
                            dataSource={data}
                        >
                            {" "}
                        </Table>
                    </div>
                }
            />


        );
    }
}
