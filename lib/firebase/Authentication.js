import { createContext, useState, useEffect, useMemo } from "react";
import * as firebase from "firebase/app";
import { useRouter } from "next/router";
import { message } from "antd";

const AuthContext = createContext(null);

const { Provider } = AuthContext;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    function listenToAuth() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
          message.success("Logged out!");
          router.push("/login");
        }
      });
    }

    listenToAuth();
  }, []);

  const value = useMemo(() => ({
    user,
  }));

  return <Provider value={value}>{children}</Provider>;
}

export default AuthContext;
