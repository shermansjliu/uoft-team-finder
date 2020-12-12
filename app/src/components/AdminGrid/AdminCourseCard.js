import React from 'react';
import {Input, Card} from 'antd';
import {DeleteOutlined, EditOutlined, SaveOutlined} from '@ant-design/icons';
import {edit, removeCourse, save} from "./action";
import 'antd/dist/antd.css';
import './style.css';
import  {withRouter,Link} from "react-router-dom";
import ImageUploader from "../ImageUploader";
const {Meta} = Card;
const {TextArea} = Input;

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
    ? <Link to={to} >{children}</Link>
    : <>{children}</>;

class AdminCourseCard extends React.Component {
    constructor(props) {
        super(props);
        const course = this.props.course;
        this.state = {
            isEditing: false,
            newCourseName: course.courseName,
            newDescription: course.description,
            newImg: course.image,
            newDepartment: course.department,
        };
    }

    render() {
        const {page, course} = this.props;
        // if not editing, all elements should be displayed
        let img = (<img alt="No image yet" src={course.image} />)
        let courseName = course.courseName;
        let description = course.description;
        let editIcon = (<EditOutlined onClick={() => edit(this)}/>)

        // if is editing, all element change to edit mode
        if (this.state.isEditing) {
            // editable courseName
            courseName = <Input value={this.state.newCourseName}
                                name={"newCourseName"}
                                onChange={this.handleInputChange}/>
            // editable description
            description = <TextArea value={this.state.newDescription}
                                    name={"newDescription"}
                                    onChange={this.handleInputChange}/>
            // upload photo if editing, need backend here
            img = (
                <span className={"center__"}>
                    <ImageUploader api={"implement latter"} />
                </span>
                )
            // change icon to save mode
            editIcon = (<SaveOutlined onClick={() => save(this, course)}/>)
        }


        return (
            <Card hoverable className="card"
                  cover={
                      [img]
                  }
                  actions={[
                      [editIcon],
                      <DeleteOutlined onClick={() => removeCourse(page, course, this)}/>,
                  ]}
            >
                {/*if is not editing, pass the course we entered, and go to the next page*/}
                <ConditionalLink to={{pathname: `/CourseAdmin/${courseName}`, query :{ course: course }}} condition={!this.state.isEditing}>
                <Meta hoverable
                    title={courseName}
                    description={description}
                />
                </ConditionalLink>
            </Card>

        );
    }



    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // console.log(value);
        this.setState({
            [name]: value
        });
    };
}

export default withRouter(AdminCourseCard);