import {Card, List} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import "./style.css"
import {Link} from "react-router-dom";
import bkimg from "../../img/home-books.jpg";

const {Meta} = Card;

class CourseGrid extends React.Component {
    state = {
        courses: [
            {
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
            },
            {
                courseName: 'csc302',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
            {
                courseName: 'csc303',
                department: 'CSC',
                description: 'This is a description',
                image: bkimg,
            },
        ],
        numColumns: 5,
    };

    render() {
        return (
            <>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 4,
                        xxl: 5,
                    }}
                    dataSource={this.state.courses}
                    renderItem={item => (
                        <List.Item>
                            <Link to='/Course' params={{ course: item }}>
                                <Card hoverable
                                    cover={
                                        <img className={"courseCard"}
                                            alt="Cannot load"
                                            src={item.image}
                                        />
                                    }
                                >
                                    <Meta
                                        title={item.courseName}
                                        description={item.description}
                                    />
                                </Card>
                            </Link>
                        </List.Item>
                    )}
                />,

            </>
        );
    }
}

export default CourseGrid;