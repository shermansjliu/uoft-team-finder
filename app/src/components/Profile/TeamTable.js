import { List, Card, Button, Input, Row, Space, Tooltip, Sapce, Typography} from 'antd';
import React from 'react';
import "./styles.css"
import "../../App.css"
import {
    FileAddOutlined
} from '@ant-design/icons';
import {addTeam} from './Action.js'
import bkimg from "../../img/home-books.jpg";
import TeamCard from './TeamCard.js';

const { Search } = Input;
const {Title} = Typography;


class TeamTable extends React.Component{
    state={
        onSearchString: '',
    }
    render() {
        const {infos} = this.props;
        const filteredTeams = infos.state.teams.filter(team => {
            return team.teamName.includes(this.state.onSearchString)})
        return (
            <div>
                <Row type="flex" align="middle">
                    <Space>
                        <Title>Your Teams</Title>
                        <Tooltip title="add more teams" onClick={() => addTeam(infos, bkimg)} >
                            <Button shape="circle"
                                    icon={<FileAddOutlined
                                        />}/>
                        </Tooltip>
                        <Search  placeholder="search a team here"
                                 value={this.state.onSearchString}
                                 onChange={(e)=>{this.setState({onSearchString: e.target.value})}}
                                 enterButton
                        />
                    </Space>
                </Row>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 4,
                        xxl: 5,
                    }}
                    dataSource={filteredTeams}
                    renderItem={item => (
                    <List.Item>
                        <TeamCard team={item}
                                    page={infos} />
                    </List.Item>
                    )}
                />  
            </div>
        )
    }
}

export default TeamTable
