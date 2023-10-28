import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContext = {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  authType: "login" | "signup";
  setAuthType: Dispatch<SetStateAction<"login" | "signup">>;
  loading: boolean;
  setLoading:Dispatch<SetStateAction<boolean>>
};

const appContext = React.createContext<AppContext>({} as AppContext);

function AppContextProvider({ children }: { children: React.ReactNode | any }) {
  const [user, setUser] = useState<any>({});
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState<boolean>(true);

  const value = {
    user,
    setUser,
    authType,
    setAuthType,
    loading,
    setLoading,
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      setUser(user);
    } else {
      setUser({});
    }
  }, []);

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default AppContextProvider;

export const useAppContext: () => AppContext = () => useContext(appContext);
