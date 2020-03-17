import { Form, Input, Button, Checkbox, Alert } from "antd";

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
  padding-bottom: 2rem;

  ${props =>
    props.show &&
    `
    transform: scaleY(1);
  `}
`;

function LoginForm({ loading }) {
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={postLogin}
    >
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

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <ErrorContainer show={!!error}>
        <Alert message="Please check email and password." type="error" />
      </ErrorContainer>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          SIGN IN
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
