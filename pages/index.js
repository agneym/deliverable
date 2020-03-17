import React from "react";

import { AuthProvider } from "../lib/firebase/Authentication";
import Layout from "../components/Layout";

function Index() {
  return (
    <AuthProvider>
      <Layout>
        <p>Main page</p>
      </Layout>
    </AuthProvider>
  );
}

export default Index;
