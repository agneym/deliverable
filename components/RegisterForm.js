import styled from "styled-components";
import { Form, Input, Button, Radio, Alert } from "antd";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

const ErrorContainer = styled.div`
  transform: scaleY(0);
  transform-origin: top center;
  transition: transform 0.2s ease-in-out;
  height: 0;
  padding-bottom: 2rem;

  ${props =>
    props.show &&
    `
    height: auto;
    transform: scaleY(1);
  `}
`;

function RegisterForm({ loading, error, onRegister }) {
  return (
    <Form {...layout} name="basic" onFinish={onRegister}>
      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a email address" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label="Sign up as" name="as" labelCol={{ span: 10 }}>
        <Radio.Group>
          <Radio.Button value="user">User</Radio.Button>
          <Radio.Button value="rider">Rider</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: "Please share your phone number!" }]}
      >
        <Input />
      </Form.Item>

      <ErrorContainer show={!!error}>
        <Alert message={error} type="error" />
      </ErrorContainer>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          REGISTER
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;
