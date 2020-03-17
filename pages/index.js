import React from "react";

import { AuthProvider } from "../lib/firebase/Authentication";
import Layout from "../components/Layout";
import Listing from "../components/Services/Listing";

function Index() {
  return (
    <AuthProvider>
      <Layout>
        <Listing />
      </Layout>
    </AuthProvider>
  );
}

export default Index;
