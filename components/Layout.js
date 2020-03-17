import React from "react";
import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

import HeaderComponent from "./Header";

const {
  Header: AntdHeader,
  Content: AntdContent,
  Footer: AntdFooter,
} = AntdLayout;

const Header = styled(AntdHeader)`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadows.default};
`;

const Footer = styled(AntdFooter)`
  background-color: ${props => props.theme.colors.gray[700]};
  color: ${props => props.theme.colors.gray[200]};
`;

const Content = styled(AntdContent)`
  padding: 0 5rem;
  margin: 64px auto 0;
  min-height: calc(100vh - 64 * 2px);
  max-width: 60%;
  width: 100%;
`;

function Layout({ children }) {
  return (
    <AntdLayout>
      <Header>
        <HeaderComponent />
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>Open Source on Github.</Footer>
    </AntdLayout>
  );
}

export default Layout;
