import React, {Component} from "react";
import {Layout, Typography, Space} from 'antd'
import CourseGrid from '../CourseGrid/CourseGrid'
import './index.css';
import '../../App.css'
import HomeViewFooter from "../CourseViewFooter";
import StandardLayout from "../StandardLayout/layout";

const {Sider, Content} = Layout;
const {Title} = Typography;


class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <>
                <StandardLayout
                    img={""}
                    title={"Courses"}
                    content={<CourseGrid/>}
                />
            </>
        );
    }
}

export default Home;


