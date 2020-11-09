import React from 'react';
import {Input, Card} from 'antd';
import {DeleteOutlined, EditOutlined, SaveOutlined} from '@ant-design/icons';
import {edit, removeExp, saveExp} from "./Action";
import 'antd/dist/antd.css';
import './styles.css';
import  {withRouter,Link} from "react-router-dom";
import ImageUploader from "../ImageUploader";
const {Meta} = Card;
const {TextArea} = Input;

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
    ? <Link to={to} >{children}</Link>
    : <>{children}</>;

class ExpCard extends React.Component {
    constructor(props) {
        super(props);
        const exp = this.props.exp;
        this.state = {
            isEditing: false,
            newExpName: exp.expName,
            newDescription: exp.description,
            newImg: exp.image,
        };
    }

    render() {
        const {page, exp} = this.props;
        // if not editing, all elements should be displayed
        let img = (<img alt="No image yet" src={exp.image} />)
        let expName = exp.expName;
        let description = exp.description;
        let editIcon = (<EditOutlined onClick={() => edit(this)}/>)

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
        return (
            <Card hoverable className="card"
                  cover={
                      [img]
                  }
                  actions={[
                      [editIcon],
                      <DeleteOutlined onClick={() => removeExp(page, exp, this)}/>,
                  ]}
            >
                <h3>{expName}</h3>
                <description>{description}</description>
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

export default ExpCard;