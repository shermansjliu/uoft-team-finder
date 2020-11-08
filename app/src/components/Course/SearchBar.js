import React, { Component } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default class SearchBar extends Component {
  render() {
    return (
      <Input
        className="searchBar"
        value={this.state.searchRes}
        size="large"
        onChange={this.handleInputChange}
        placeholder="search team name"
        prefix={<SearchOutlined />}
      />
    );
  }
}
