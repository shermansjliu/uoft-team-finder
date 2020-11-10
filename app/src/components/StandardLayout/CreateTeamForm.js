import React, { Component } from "react";
import { Form, Input, Select, InputNumber } from "antd";
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
          <Input placeholder="Awesome sauce" />
        </Form.Item>
        <Form.Item
          label="Course Code"
          className="selectClass"
          required
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
        <Form.Item label="Number of members" required>
          <InputNumber min={1} max={10} placeholder="1 - 10" required />
        </Form.Item>
      </Form>
    );
  }
}
