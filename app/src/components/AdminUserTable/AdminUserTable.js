import React from 'react'
import AdminLayout from "../AdminLayout/AdminLayout";
import {Input, Space, Table, Tag} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import "./style.css"
import {Link} from "react-router-dom";
import {changePassword, deleteUser} from "./actions"

class AdminUserTable extends React.Component{
    state = {
        searchRes:"",
        data : [
            {
                key: '1',
                username: 'John2',
                name: 'John Brown',
                year: 3,
                address: 'New York No. 1 Lake Park',
                tags: [],
            },
            {
                key: '2',
                username: 'Jimeee',
                name: 'Jim Green',
                year: 4,
                address: 'London No. 1 Lake Park',
                tags: ['TeamLeader'],
            },
            {
                key: '3',
                username: 'Joeeeee',
                name: 'Joe Black',
                year: 3,
                address: 'Sidney No. 1 Lake Park',
                tags: ['CSC'],
            },
        ],
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
                        let color = tag==="csc" ? 'geekblue' : 'green';
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
                    <Link to="/Profile"><a>Edit</a></Link>
                    <a onClick={() => deleteUser(record, this)}>Delete</a>
                </Space>
            ),
        },
    ];

    render() {
        let regex = RegExp(`${this.state.searchRes}`, "gi");
        const filteredData = this.state.data.filter((item) => {
            return regex.test(item.username);
        });
        console.log("data",this.state.data);
        console.log("filtered",filteredData);
        return (
            <AdminLayout
              content={
                  <div>
                      <h1 className="courseCode theme-title">{"Users"}</h1>
                      <div className={"user-table-wrapper"}>
                      <Input
                          className="center__ user-search"
                          value={this.state.searchRes}
                          size="large"
                          onChange={(e)=>this.setState({searchRes:e.target.value})}
                          placeholder="search userid"
                          prefix={<SearchOutlined />}
                      />
                      </div>
                      <Table columns={this.columns} dataSource={filteredData} />
                  </div>

              }
            />
        )
    }
}

export default AdminUserTable;