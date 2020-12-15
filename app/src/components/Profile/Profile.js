import React from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './styles.css'
import '../../App.css'
import InformationBar from './InformationBar.js';
import TabTable from './TabTable.js';
import bkimg from "../../img/home-books.jpg";
import {initialize} from "./Action";

const { Sider } = Layout;
class Profile extends React.Component {
    state = {
            userid:"",
            email: "",
            username:"",
            major:"",
            description:"Write something about you!",
            year:"3",
            cGPA:"",
            courses: [],
            teams:[],
            exps:[]
        };
    constructor(props) {
        super(props);
        const {app} = this.props;
        initialize(app.state.currentUser, this);
    }

   render() {

       return (
           <Layout className="wholeBackGround">
               {/* Left side bar */}
               <InformationBar infos={this}/>
               {/* Right side bar */}
               <Layout className="rightLayout theme-content">
                   <TabTable infos={this}/>
               </Layout>
           </Layout>
       )
   }
}


export default Profile;
