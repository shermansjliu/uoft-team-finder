import React, { Component } from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import  "./index.css";
export default class SearchBar extends Component {
  render() {
    const { searchRes, handleInputChange, handleAddTeam } = this.props;
    return (
      <div className="searchBarContainer">
        <Input
          className="searchBar"
          value={searchRes}
          size="large"
          onChange={handleInputChange}
          placeholder="search team name"
          prefix={<SearchOutlined />}
        />
        <Button className="addTeamBtn" type={"primary"} onClick={handleAddTeam}>Add Team</Button>
      </div>
    );
  }
}
