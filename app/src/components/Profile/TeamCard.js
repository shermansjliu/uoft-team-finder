import React from 'react';
import {Input, Card} from 'antd';
import {DeleteOutlined, EditOutlined, SaveOutlined} from '@ant-design/icons';
import {edit, removeTeam, saveTeam} from "./Action";
import 'antd/dist/antd.css';
import './styles.css';
import  {withRouter,Link} from "react-router-dom";
import ImageUploader from "../ImageUploader";
const {Meta} = Card;
const {TextArea} = Input;

const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
    ? <Link to={to} >{children}</Link>
    : <>{children}</>;

class TeamCard extends React.Component {
    constructor(props) {
        super(props);
        const team = this.props.team;
        this.state = {
            isEditing: false,
            newTeamName: team.teamName,
            newDescription: team.description,
            newImg: team.image,
        };
    }

    render() {
        const {page, team} = this.props;
        // if not editing, all elements should be displayed
        let img = (<img alt="No image yet" src={team.image} />)
        let teamName = team.teamName;
        let description = team.description;
        let editIcon = (<EditOutlined onClick={() => edit(page, this)}/>)

        // if is editing, all element change to edit mode
        if (this.state.isEditing) {
            // editable teamName
            teamName = <Input value={this.state.newTeamName}
                                name={"newTeamName"}
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
            editIcon = (<SaveOutlined onClick={() => saveTeam(this, team)}/>)
        }
        return (
            <Card hoverable className="card"
                  cover={
                      [img]
                  }
                  actions={[
                      [editIcon],
                      <DeleteOutlined onClick={() => removeTeam(page, team, this)}/>,
                  ]}
            >
                {/*if is not editing, pass the team we entered, and go to the next page*/}
                <ConditionalLink to={{pathname: '/Team', query :{ team: team }}} condition={!this.state.isEditing}>
                <Meta hoverable
                    title={teamName}
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

export default withRouter(TeamCard);