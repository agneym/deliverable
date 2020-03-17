import styled from "styled-components";
import { Form, Input, Button, Alert } from "antd";

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
        label="Email"
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
