import React from 'react';
import { Tabs, Divider } from 'antd';
import CourseTable from './CourseTable.js';
import TeamTable from './TeamTable.js'
import ExperienceTable from './ExperienceTable.js'

const { TabPane } = Tabs;


class TabTable extends React.Component{
    render() {
        const {infos} = this.props;
        return (
            <Tabs>
                <TabPane tab="Courses" key="1">
                    <CourseTable infos={infos}></CourseTable>
                </TabPane>
                <TabPane tab="Teams" key="2">
                    <TeamTable infos={infos}></TeamTable>
                </TabPane>
                <TabPane tab="Experiences" key="3">
                    <ExperienceTable infos={infos}></ExperienceTable>
                </TabPane>
            </Tabs>
        )
    }
}

export default TabTable