import { List, Card, Button, Input} from 'antd';
import React from 'react';

import {removeTeam} from './Action.js'

class TeamTable extends React.Component{
    render() {
        let newTeamName = 'Team Name'
        const {infos} = this.props;
        const teams = infos.state.teams;
        return (
            <div>
                <h3 style={{fontSize: 30}}>All Teams:</h3>
                <div style={{padding:10}}>
                    <Input placeholder={newTeamName} style={{width:120}} allowClear={true} onChange={e => {newTeamName = e.target.value}}/>
                    <Button type="primary" shape="round" style={{position:"relative", left:40}} onClick={() => {
                        if (newTeamName.length >= 10) {
                            alert("Please enter a team name with less than 10 characters.");
                            newTeamName ='';
                        } else {
                            teams.push({teamName:newTeamName})
                            infos.setState({teams: teams});}}}>add</Button>
                </div>
                <List
                    grid={{
                    span:2,
                    gutter: 32,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                    }}
                    dataSource={teams}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.teamName}>
                            
                            <Button onClick={() => removeTeam(infos, item)} type="primary" shape="round" style={{float: 'right'}}>Remove</Button>
                        </Card>
                    </List.Item>
                    )}
                />  
            </div>
        )
    }
}

export default TeamTable