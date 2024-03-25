
import React, { createContext, useContext, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (loginData: {email:string, password:string}) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => void;
  signup: (signupData: {email:string, password:string, user_name:string}) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [token, setToken] = React.useState<string | null>(null);
  
  const storeToken = (token: string | null) => {
    if(!token) {
      localStorage.removeItem("token");
    }
    else{
      localStorage.setItem("token", token as string);
    }
    setToken(token);
    setIsAuthenticated(!!token);
  };

  const login = async (loginData : {email: string, password:string}) => {
    //login logic
    console.log("here")
    storeToken("token-from-server");
  }
  const logout = () => {
    //logout logic
    console.log("here to log out")
    storeToken(null);
  };

  const forgotPassword = (email: string) => {
    //forgot password logic
  };

  const signup = (signupData : {email:string, password: string, user_name:string}) => {
    //signup logic
    storeToken("token-from-server");
  };

  const contextValue: AuthContextType = {
    isAuthenticated: isAuthenticated,
    token: token,
    login,
    logout,
    forgotPassword,
    signup,
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      storeToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;