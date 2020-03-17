import React, { useState } from "react";
import styled from "styled-components";
import * as firebase from "firebase/app";
import { message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

import RegisterForm from "../components/RegisterForm";

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

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleRegister = ({ email, password }) => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        message.success("Registered successfully!");
        router.push("/login");
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
        <title>Register</title>
      </Head>
      <FormContainer>
        <RegisterForm
          onRegister={handleRegister}
          loading={loading}
          error={error}
        />
      </FormContainer>
    </Main>
  );
}

export default Register;
