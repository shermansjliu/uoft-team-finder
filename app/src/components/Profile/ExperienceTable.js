import { List, Card, Button, Input, Row, Space, Tooltip, Sapce, Typography} from 'antd';
import React from 'react';
import "./styles.css"
import "../../App.css"
import {
    FileAddOutlined
} from '@ant-design/icons';
import {addExperience} from './Action.js'
import bkimg from "../../img/home-books.jpg";
import ExpCard from './ExperienceCard.js';

const { Search } = Input;
const {Title} = Typography;
class ExperienceTable extends React.Component{
    state={
        onSearchString: '',
        displayedExps: []
    }
    render() {
        const {infos} = this.props;
        const filteredExps = infos.state.exps.filter(exp => {
            return exp.expName.includes(this.state.onSearchString)})
        return (
            <div>
                <Row type="flex" align="middle">
                    <Space>
                        <Title>Your Experiences</Title>
                        <Tooltip title="add more experiences" onClick={() => addExperience(infos, bkimg)} >
                            <Button shape="circle"
                                    icon={<FileAddOutlined
                                        />}/>
                        </Tooltip>
                        <Search  placeholder="search a experience here"
                                 value={this.state.onSearchString}
                                 onChange={(e)=>{this.setState({onSearchString: e.target.value})}}
                                 enterButton
                        />
                    </Space>
                </Row>
                
                <List
                    dataSource={filteredExps}
                    renderItem={item => (
                    <List.Item>
                        {/* <List.Item.Meta title={item.expName} description={item.description}/> */}
                        <ExpCard exp={item}
                                 page={infos} />
                    </List.Item>
                    )}
                />  
            </div>
        )
    }
}

export default ExperienceTable