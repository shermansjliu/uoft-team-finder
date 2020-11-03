import React from 'react';
import {Divider, Input} from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import style from './style.css';


class personal_info extends React.Component {

    render() {
        const {handleInputChange, major, year, courses, cGPA } = this.props;
        return (
            <div>
                <h3 style={{fontSize:"30px"}}> About me</h3>
                    <div>
                        <h3 style={{float:"left"}}> Major: </h3>
                        <Input style={{float:"right", width:"50%"}} name="major" onChange={handleInputChange} placeholder={major} bordered={false} />
                    </div>
                    <Divider></Divider>
                    <div>
                        <h3 style={{float:"left"}}> Year: </h3>
                        <Input style={{float:"right", width:"50%"}} name="year" onChange={handleInputChange} placeholder={year} bordered={false} />
                    </div>
                    <Divider></Divider>
                    <div>
                        <h3 style={{float:"left"}}>Courses taking: </h3>
                        <Input style={{float:"right", width:"50%"}} name="courses" onChange={handleInputChange} placeholder={courses} bordered={false} />
                    </div>
                    <Divider></Divider>
                    <div>
                        <h3 style={{float:"left"}}>cGPA: (optional)</h3>
                        <Input style={{float:"right", width:"50%", color:""}} name="cGPA" onChange={handleInputChange} placeholder={cGPA} bordered={false} />
                    </div>
            </div>
        )
    }
}


export default personal_info