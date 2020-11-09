import React from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './styles.css'
import '../../App.css'
import InformationBar from './InformationBar.js';
import TabTable from './TabTable.js';
import bkimg from "../../img/home-books.jpg";

const { Sider } = Layout;
class Profile extends React.Component {
    state = {
        name:"Enter your name here.",
        major:"Enter your specialist or major here.",
        description:"Write something about you!",
                year:"3",
        cGPA:"",
        courses: [{
            courseName: 'csc309',
            department: 'CSC',
            description: 'This is a description',
            image: bkimg,
        },
        {
            courseName: 'csc301',
            department: 'CSC',
            description: 'This is a description',
            image: bkimg,
        },],
        teams:[
            {
                teamName: 'The john wicks',
                description: 'TEAM!!!',
                image: bkimg,
            },
        ],
        exps:[
            {
                expName: 'Fellowship of the ring',
                description: 'Was a hard trip. But we did it!!',
                image: bkimg,
            },
        ]
    }

   render() {
       return (
           <Layout className="wholeBackGround theme-content">
               {/* Left side bar */}
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
