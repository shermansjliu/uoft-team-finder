import React, { Component } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./index.css";
export default class SearchBar extends Component {
  render() {
    const { searchRes, handleInputChange } = this.props;
    return (
      <div className="searchBarContainer">
        {/* <div> */}
        <Input
          className="searchBar"
          value={searchRes}
          size="large"
          onChange={handleInputChange}
          placeholder="search team name"
          prefix={<SearchOutlined />}
        />
        {/* </div> */}
      </div>
    );
  }
}
