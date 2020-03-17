import styled from "styled-components";
import { Button, message } from "antd";
import firebase from "firebase/app";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

function Header() {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        message.success("Logged out!");
      });
  };

  return (
    <Container>
      <div />
      <Button type="link" onClick={logout}>
        LOGOUT
      </Button>
    </Container>
  );
}

export default Header;
