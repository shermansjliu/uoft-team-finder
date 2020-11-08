import {Card, List} from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import "./styles.css"
import {Link} from "react-router-dom";

const {Meta} = Card;

class CourseGrid extends React.Component {
    state = {
        courses: [
            {
                courseName: 'csc309',
                department: 'CSC',
                description: 'This is a description',
                image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            },
            {
                courseName: 'csc309',
                department: 'CSC',
                description: 'This is a description',
                image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            },
            {
                courseName: 'csc309',
                department: 'CSC',
                description: 'This is a description',
                image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            },
            {
                courseName: 'csc309',
                department: 'CSC',
                description: 'This is a description',
                image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            }
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
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 6,
                    }}
                    dataSource={this.state.courses}
                    renderItem={item => (
                        <List.Item>
                            <Link to='/Course' params={{ course: item }}>
                                <Card hoverable
                                    style={{}}
                                    cover={
                                        <img
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