import React from "react";

import { AuthProvider } from "../lib/firebase/Authentication";

function Index() {
  return (
    <AuthProvider>
      <p>Main page</p>
    </AuthProvider>
  );
}

export default Index;
