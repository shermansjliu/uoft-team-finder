import { List, Card, Button, Input, Typography} from 'antd';
import React from 'react';
import {removeExp, setExpContent} from './Action.js'

const { Paragraph } = Typography;

class ExperienceTable extends React.Component{
    render() {
        let newExpTitle = 'Experience Title'
        const {infos} = this.props;
        const exps = infos.state.exps;
        return (
            <div>
                <h3 style={{fontSize: 30}}>Past Experiences:</h3>
                <div style={{padding:10}}>
                    <Input placeholder={newExpTitle} style={{width:220}} allowClear={true} onChange={e => {newExpTitle = e.target.value}}/>
                    <Button type="primary" shape="round" style={{position:"relative", left:40}} onClick={() => {
                        if (newExpTitle.length >= 20) {
                            alert("Please enter a title with less than 20 characters.");
                        } else {
                            exps.push({expTitle :newExpTitle});
                            infos.setState({exps: exps});}}}>add</Button>
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
                    dataSource={exps}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.expTitle}>
                            <Paragraph editable={{onChange: e => setExpContent(infos, item, e)}}> {item.content} </Paragraph>
                            <Button onClick={() => removeExp(infos, item)} type="primary" shape="round" style={{float: 'right'}}>Remove</Button>
                        </Card>
                    </List.Item>
                    )}
                />  
            </div>
        )
    }
}

export default ExperienceTable