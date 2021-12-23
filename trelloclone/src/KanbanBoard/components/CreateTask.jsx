import React from "react";
import { Form, Input, Button } from "antd";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

function CreateTask({ onFinish }) {
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name="label"
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export { CreateTask };
