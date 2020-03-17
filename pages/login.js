import React, { useState } from "react";
import styled from "styled-components";
import * as firebase from "firebase/app";
import { message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

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
  padding: 3rem 2rem 1rem;
`;

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const loginFn = ({ email, password }) => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        message.success("Signed in successfully!");
        router.push("/");
      })
      .catch(function(error) {
        const errorMessage = error.message;
        setLoading(false);
        setError(errorMessage);
      });
  };
  return (
    <Main>
      <Head>
        <title>Login</title>
      </Head>
      <FormContainer>
        <LoginForm loginFn={loginFn} loading={loading} error={error} />
      </FormContainer>
    </Main>
  );
}

export default Login;
