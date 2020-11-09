import React, { Component } from "react";
import { Form, Input, Button, Select, message } from "antd";
import uuid from "react-uuid";
const { Option } = Select;
export default class CreateTeamForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedClass: "CSC30",
      classOptions: ["CSC301", "MAT235", "CSC207", "CSC373"],
    };
  }
  render() {
    return (
      <Form>
        <Form.Item
          rules={[{ required: true, message: "Input your team's name" }]}
          label="Team Name"
          name="Team Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please pick a course" }]}
          label="Course Code"
          className="selectClass"
          hasFeedback
        >
          <Select placeholder="Course Code">
            {this.state.classOptions.map((option) => {
              return (
                <Option key={uuid()} value={option}>
                  {option}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
    );
  }
}
