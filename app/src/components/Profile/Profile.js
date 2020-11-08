import React from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './styles.css'
import InformationBar from './InformationBar.js';
import TabTable from './TabTable.js';
const { Sider } = Layout;
class Profile extends React.Component {
    state = {
        name:"Enter your name here.",
        major:"Enter your specialist or major here.",
        description:"Write something about you!",
                year:"3",
        cGPA:"",
        courses:[
            {courseTitle: 'CSC309'},
            {courseTitle: 'CSC373'},
        ],
        teams:[
            {teamName: 'THE JOHN WICKS'}
        ],
        exps:[
            {expTitle: 'CSC207',
             content: 'Took it last year!'}
        ]
    }

   render() {
       return (
           <Layout>
               {/* Left side bar */}
               <Sider width="30%"></Sider>
               <InformationBar infos={this}
                                name={this.state.name}
                                major={this.state.major}
                                year={this.state.year}
                                cGPA={this.state.cGPA}
                                description={this.state.description} />
               {/* Right side bar */}
               <Layout className="rightLayout">
                   <TabTable infos={this}></TabTable>
               </Layout>
           </Layout>
       )
   }
}


export default Profile;
