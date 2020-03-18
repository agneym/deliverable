import styled from "styled-components";
import { Form, Input, Button, Radio, Alert, message } from "antd";
import { useState } from "react";

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

  const [currentLocation, setCurrentLocation] = useState(null);

  const getLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition((position) => {
      const crd = position.coords;
      const { latitude, longitude } = crd;
      setCurrentLocation({
        latitude,
        longitude,
      });
    }, () => {
      message.error("Getting location failed!")
    }, options);
  }

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

      <Form.Item
        label="Allow access to your location"
        name="location"
      >
        <Button block onClick={getLocation}>Access Location</Button>
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
