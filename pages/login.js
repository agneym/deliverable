import React from "react";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 45ch;
  background-color: ${props => props.theme.colors.gray[200]};
  padding: 3rem 2rem;
`;

function Login() {
  return (
    <Main>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Main>
  );
}

export default Login;
