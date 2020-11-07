import React from 'react';
import {Layout} from 'antd'
import 'antd/dist/antd.css';
import "./style.css";

import Information_bar from './Information_bar';
import TabTable from './TabTable';

class Profile extends React.Component {
    state = {
        name:"Enter your name here.",
        major:"Enter your specialist or major here.",
        description:"Write something about you!",
        year:"3",
        cGPA:"",
        courses:[],
    }

   render() {
       return (
           <Layout style={{
               height:"100vh",
           }}>
               {/* Left side bar */}
               <Information_bar infos={this}
                                name={this.state.name}
                                major={this.state.major}
                                year={this.state.year}
                                cGPA={this.state.cGPA}
                                description={this.state.description} />
               {/* Right side bar */}
               <Layout style={{
                   width:"70%",
                   height:"100%",
                   padding:24,
               }}>
                   <TabTable></TabTable>
               </Layout>
           </Layout>
       )
   }
}


export default Profile;
