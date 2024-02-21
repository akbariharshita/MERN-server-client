/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const AuthorizationToken = `Bearer ${token}`;

  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const fetchWithBaseURL = (url, options) => {
    // Define your default base URL here
    const baseURL = BASE_URL;

    // Combine the base URL with the provided URL
    const fullURL = baseURL + url;

    // Make the fetch request using the combined URL
    return fetch(fullURL, options);
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetchWithBaseURL("/auth/user", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.userData);
        setUser(data.userData);
        setIsLoading(false);
      }
    } catch (err) {
      console.log("Error Fetching user data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storetokenInLS,
        LogoutUser,
        user,
        AuthorizationToken,
        setIsLoading,
        fetchWithBaseURL,
        isLoading,
        userAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return AuthContextValue;
};
