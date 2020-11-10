import React from 'react';
import {Button, Avatar, Comment, Space, List, Input, Card} from 'antd';
import {DeleteOutlined, MessageOutlined, EditOutlined, SaveOutlined, DeleteTwoTone} from '@ant-design/icons';
import {sendComment,removeComment, edit, removeExp, saveExp} from "./Action";
import 'antd/dist/antd.css';
import './styles.css';
import '../../App.css';
import  {withRouter,Link} from "react-router-dom";
import ImageUploader from "../ImageUploader";
const {Meta} = Card;
const {TextArea} = Input;
const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
    ? <Link to={to} >{children}</Link>
    : <>{children}</>;

class ExpCard extends React.Component {
    constructor(props) {
        super(props);
        const exp = this.props.exp;
        this.state = {
            isEditing: false,
            showComment: false,
            newExpName: exp.expName,
            newDescription: exp.description,
            newImg: exp.image,
            newComment: '',
        };
    }

    render() {
        const {page, exp} = this.props;
        // if not editing, all elements should be displayed
        let img = (<img alt="No image yet" src={exp.image} />)
        let expName = exp.expName;
        let description = exp.description;
        let editIcon = (<EditOutlined onClick={() => edit(page, this)}/>)

        // if is editing, all element change to edit mode
        if (this.state.isEditing) {
            // editable expName
            expName = <Input value={this.state.newExpName}
                                name={"newExpName"}
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
            editIcon = (<SaveOutlined onClick={() => saveExp(this, exp)}/>)
        }

        let comments = null
        if (this.state.showComment) {
            comments = (<List
                dataSource={exp.comments}
                renderItem={item => (
                    <List.Item>
                        <Comment
                                author={<a>{item.commenter}</a>}
                                avatar={<Avatar
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                            size={30}/>}
                                content={<div>
                                    {item.content}
                                </div>}>
                                <DeleteOutlined
                                        onClick={()=>removeComment(page,exp,item)}
                                        className="commentDeleteButton"/>
                        </Comment>
                    </List.Item>)}
            />) 
        }

        let addComment = null
        if (this.state.showComment){
            addComment = <TextArea 
            className="expCommentInput"
            autoSize={true}
            allowClear={true}
            value={this.state.new}
            name={"newComment"}
            onChange={this.handleInputChange}/> 
        }

        let sendCommentButton = null
        if (this.state.showComment){
            sendCommentButton = <Button
            className="expCommentSend ant-btn-primary"
            onClick={() => {sendComment(this, exp)}}>Send</Button>
        }

        return (
        <List.Item.Meta title={<h3>{expName}</h3>} description={
                <div>
                    <p>{description}</p>
                    <div className="expIconBar">
                        <Space>
                            {editIcon}
                            <DeleteOutlined className={"iconColor"} onClick={() => removeExp(page, exp, this)}/>
                            <MessageOutlined className={"iconColor"} onClick={() => {
                                this.setState({showComment: !this.state.showComment})
                            }}/>
                        </Space>
                    </div>
                        <div className="expCommentInputBar">
                            {addComment} 
                            {sendCommentButton}
                        </div>
                    {comments}
                </div>
            }/>
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

export default ExpCard;