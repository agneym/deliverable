import React from "react";
import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

const { Header, Content, Footer: AntdFooter } = AntdLayout;

const Footer = styled(AntdFooter)`
  background-color: ${props => props.theme.colors.gray[700]};
  color: ${props => props.theme.colors.gray[200]};
`;

function Layout({ children }) {
  return (
    <AntdLayout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}></Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>Open Source on Github.</Footer>
    </AntdLayout>
  );
}

export default Layout;
