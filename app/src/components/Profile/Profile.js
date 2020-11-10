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
        username:"user",
        isVisiter:false,
        email: "user@gmail.com",
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
                comments: [
                    {commenter: "Gollum", content:"Gollum! Gollum!"},
                    {commenter: "Gandalf", content:"What a surprise!"} 
                ]
            },
            {
                expName: 'Bought some coca cola yesterday',
                description: 'Cuz I love it!!!',
                comments: [
                    {commenter: "Pepsi", content: "Am I a joke to you?"},
                    {commenter: "Coca", content: "That is my pleasure"},
                ]
            },]
    }

   render() {
       return (
           <Layout className="wholeBackGround">
               {/* Left side bar */}
               <InformationBar infos={this}/>
               {/* Right side bar */}
               <Layout className="rightLayout theme-content">
                   <TabTable infos={this}></TabTable>
               </Layout>
           </Layout>
       )
   }
}


export default Profile;
