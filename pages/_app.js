import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../lib/styles/theme";
import Global from "../lib/styles/Global";
import setupFirebase from "../lib/firebase/setup";

export default class CustomApp extends App {
  componentDidMount() {
    setupFirebase();
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Global />
      </ThemeProvider>
    );
  }
}
