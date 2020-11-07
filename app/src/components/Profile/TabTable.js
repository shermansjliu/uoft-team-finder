import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class TabTable extends React.Component{
    render() {
        return (
            <Tabs type="card">
                <TabPane tab="Courses" key="1">
                    <p>Content of Tab Pane 1</p>
                    <p>Content of Tab Pane 1</p>
                    <p>Content of Tab Pane 1</p>
                </TabPane>
                <TabPane tab="Teams" key="2">
                    <p>Content of Tab Pane 2</p>
                    <p>Content of Tab Pane 2</p>
                    <p>Content of Tab Pane 2</p>
                </TabPane>
                <TabPane tab="Experiences" key="3">
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                </TabPane>
            </Tabs>
        )
    }
}

export default TabTable