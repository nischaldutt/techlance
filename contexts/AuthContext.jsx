import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

import axiosClient from "@/libs/axiosClient";
import { getUser, postRequest } from "@/services";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadTokenFromCookies() {
      const token = Cookies.get("token");

      if (token) {
        axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
        const response = await getUser(token);

        if (response !== APP_CONSTANTS.MESSAGES.AUTH.UNAUTHORISED) {
          setUser(response);
        } else {
          Cookies.remove("token");
          delete axiosClient.defaults.headers.Authorization;
        }
      }
      setIsLoading(false);
    }

    loadTokenFromCookies();
  }, []);

  console.log({ user });

  const login = async (userObj, callback) => {
    try {
      setIsLoading(true);
      const { payload, message } = await postRequest(
        URL_CONSTANTS.AUTH.LOGIN,
        userObj
      );

      if (payload?.token) {
        Cookies.set("token", payload?.token, {
          expires: APP_CONSTANTS.AUTH_TOKEN_VALIDITY,
        });
        axiosClient.defaults.headers.Authorization = `Bearer ${payload?.token}`;
        setUser(payload);
      }

      setIsLoading(false);
      callback(true, message);
    } catch (error) {
      setIsLoading(false);
      callback(false, error?.payload?.message);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    delete axiosClient.defaults.headers.Authorization;
    window.location.pathname = URL_CONSTANTS.ROUTES.HOME;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        isTokenPresent: !!Cookies.get("token"),
        user,
        login,
        isLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
