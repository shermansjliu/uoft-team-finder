import React from 'react'
import AdminLayout from "../AdminLayout/AdminLayout";
import {Input, Space, Table, Tag} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import "./style.css"
import {Link} from "react-router-dom";
import {changePassword, deleteUser} from "./actions"
import {getAllCourses} from "../AdminGrid/action";
import {getAllUsers} from "../../actions/users";

class AdminUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchRes: "",
            users: [],
            courses: []
        }
        getAllUsers(this);
        getAllCourses(this)
    }


    columns = [
        {
            title: 'UserID',
            dataIndex: 'username',
            key: 'username',
            render: text => <a>{text}</a>,
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag === "csc" ? 'geekblue' : 'green';
                        if (tag === 'TeamLeader') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => changePassword(record)}>ChangePassword</a>
                    <a onClick={() => changeUsernameAdmin(record)}>ChangeName</a>
                    <a onClick={() => deleteUser(record, this)}>Delete</a>
                </Space>
            ),
        },
    ];

    render() {
        let regex = RegExp(`${this.state.searchRes}`, "gi");
        const filteredData = this.state.users.filter((item) => {
            return regex.test(item.username) && item.username!=="admin";
        });
        // console.log("data", this.state.users);
        // console.log("filtered", filteredData);
        return (
            <AdminLayout
                app = {this.props.app}
                users = {this.state.users}
                courses = {this.state.courses}
                content={
                    <div>
                        <h1 className="courseCode theme-title">{"Users"}</h1>
                        <div className={"user-table-wrapper"}>
                            <Input
                                className="center__ user-search"
                                value={this.state.searchRes}
                                size="large"
                                onChange={(e) => this.setState({searchRes: e.target.value})}
                                placeholder="search userid"
                                prefix={<SearchOutlined/>}
                            />
                        </div>
                        <Table rowKey="username" columns={this.columns} dataSource={filteredData}/>
                    </div>

                }
            />
        )
    }
}

export default AdminUsers;