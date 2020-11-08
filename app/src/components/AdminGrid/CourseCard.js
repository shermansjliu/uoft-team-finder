import React from 'react';
import {Input, Card} from 'antd';
import {DeleteOutlined, EditOutlined, SaveOutlined} from '@ant-design/icons';
import {removeCourse} from "./action";
import 'antd/dist/antd.css';

import {Upload, message} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
const {Meta} = Card;
const {TextArea} = Input;

class CourseCard extends React.Component {
    constructor(props) {
        super(props);
        const course = this.props.course;
        this.state = {
            isEditing: false,
            newCourseName: course.courseName,
            newDescription: course.description,
            newImg: course.image,
            newDepartment: course.department,
            loading: false,
        };
    }


    edit() {
        console.log(this.state);
        this.setState({isEditing: true});
    }

    save(course) {
        console.log(this.state);
        this.setState({isEditing: false});
        course.courseName = this.state.newCourseName
        course.department = this.state.newDepartment
        course.description = this.state.newDescription
        course.image = this.state.newImg
        console.log(this.state);
    }

    render() {
        let editIcon;
        const {page, course} = this.props;
        let img = (
            <img
                alt="No image yet"
                src={course.image}
                height={100}
            />)
        const loading = this.state.loading;
        const imageUrl = this.state.imageUrl;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        let courseName = course.courseName;
        let description = course.description;

        if (this.state.isEditing) {
            courseName = <Input value={this.state.newCourseName}
                                name={"newCourseName"}
                                onChange={this.handleInputChange}/>
            description = <TextArea value={this.state.newDescription}
                                    name={"newDescription"}
                                    onChange={this.handleInputChange}/>
            img = (
                <div style={{textAlign: "center"}}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="/api/courseImg"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </div>
                )


            editIcon = (<SaveOutlined onClick={() => this.save(course)}/>)
        } else {
            editIcon = (<EditOutlined onClick={() => this.edit()}/>)
        }
        return (
            <Card hoverable
                  style={{Width: 200, minWidth: 200, height: 300,cursor: "auto"}}
                  cover={
                      [img]
                  }
                  actions={[
                      [editIcon],
                      <DeleteOutlined onClick={() => removeCourse(page, course)}/>,

                  ]}
            >
                <Link to='/Course' params={{ course: course }}>
                <Meta hoverable
                    title={courseName}
                    description={description}
                />
                </Link>
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

    handleImageChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
}

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default CourseCard;