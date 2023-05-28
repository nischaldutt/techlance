import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

import axiosClient from "@/utils/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadTokenFromCookies() {
      const token = Cookies.get("token");

      if (token) {
        console.log("Got a token in the cookies");
        axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
      }
      setIsLoading(false);
    }

    loadTokenFromCookies();
  }, []);

  const login = async (userObj, callback) => {
    try {
      setIsLoading(true);
      const loginEndpoint =
        userObj?.user_type === APP_CONSTANTS.USER_TYPE.CUSTOMER
          ? URL_CONSTANTS.CUSTOMER.AUTH.LOGIN
          : URL_CONSTANTS.BUSINESS.AUTH.LOGIN;

      const response = await axiosClient.post(loginEndpoint, userObj);

      const {
        data: { data: authenticatedUser },
      } = response;

      if (authenticatedUser?.token) {
        Cookies.set("token", authenticatedUser?.token, {
          expires: APP_CONSTANTS.AUTH_TOKEN_VALIDITY,
        });
        axiosClient.defaults.headers.Authorization = `Bearer ${authenticatedUser?.token}`;
        setUser(authenticatedUser);
      }

      setIsLoading(false);
      callback(true, response?.data?.message);
    } catch (error) {
      setIsLoading(false);
      callback(false, error?.response?.data?.message);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    delete axiosClient.defaults.headers.Authorization;
    window.location.pathname = URL_CONSTANTS.HOME;
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

export default function useAuthContext() {
  return useContext(AuthContext);
}

// export const ProtectRoute = ({ children }) => {
//   const { isAuthenticated, loading } = useAuthContext();

//   if (loading || (!isAuthenticated && window.location.pathname !== "/login")) {
//     // show the loading screen
//     // return <LoadingScreen />;
//   }

//   return children;
// };
