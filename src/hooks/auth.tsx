import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  COLLECTION_AMOUNTS,
  COLLECTION_TRANSACTIONS,
  COLLECTION_USERS,
} from "../utils/config/database";

// const { REDIRECT_URI } = process.env;
// const { SCOPE } = process.env;
// const { RESPONSE_TYPE } = process.env;
// const { CLIENT_ID } = process.env;

type AuthContextData = {
  user: User;
  loading: boolean;
  handleSignInWithGoogle: () => Promise<void>;
  handleSingOutWithGoogle: () => Promise<void>;
};

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);
  const [amounts, setAmounts] = useState<UserAmountType>({
    income: 0,
    expense: 0,
    balance: 0,
  } as UserAmountType);

  const handleSignInWithGoogle = async () => {
    try {
      setLoading(true);

      const REDIRECT_URI = "https://auth.expo.io/@leonardo.calazans/finances";
      const SCOPE = "profile%20email";
      const RESPONSE_TYPE = "token";
      const CLIENT_ID =
        "5043441530-qk6pqfcpbph2484e4l55qna1bjarnb23.apps.googleusercontent.com";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );

        const user = await response.json();
        const userData = {
          ...user,
          token: params.access_token,
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch (error) {
      throw new Error(`Não foi possível autenticar. ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSingOutWithGoogle = async () => {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USERS);
  };

  const loadUserStorageData = async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);
    const transactions = await AsyncStorage.getItem(COLLECTION_TRANSACTIONS);
    const transactionList = transactions ? JSON.parse(transactions) : [];

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      setUser(userLogged);
    }
    transactionList.map(({ amount }: TransactionType) =>
      setAmounts({
        income: amount >= 0 && amounts.income + amount,
        expense: amount < 0 && amounts.expense + amount,
        balance: amounts.income + amounts.expense,
      })
    );
    await AsyncStorage.setItem(COLLECTION_AMOUNTS, JSON.stringify(amounts));
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handleSignInWithGoogle,
        handleSingOutWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
