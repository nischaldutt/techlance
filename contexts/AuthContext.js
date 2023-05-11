import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

import axiosClient from "@/utils/axiosClient";
import { URL_CONSTANTS } from "@/constants";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");

      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        axiosClient.defaults.headers.Authorization = `Bearer ${token}`;

        // const { data: user } = await axiosClient.get("users/me");
        // if (user) setUser(user);
      }
      setLoading(false);
    }

    loadUserFromCookies();
  }, []);

  const login = async (userObj) => {
    const response = await axiosClient.post(URL_CONSTANTS.AUTH.LOGIN, userObj);

    const {
      data: { data: authenticatedUser },
    } = response;

    if (authenticatedUser?.token) {
      Cookies.set("token", authenticatedUser?.token, { expires: 60 });
      axiosClient.defaults.headers.Authorization = `Bearer ${authenticatedUser?.token}`;

      setUser(authenticatedUser);
    }

    return response;
  };

  const logout = (email, password) => {
    Cookies.remove("token");
    setUser(null);
    delete axiosClient.defaults.headers.Authorization;
    window.location.pathname = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading || (!isAuthenticated && window.location.pathname !== "/login")) {
    // show the loading screen
    // return <LoadingScreen />;
  }

  return children;
};
