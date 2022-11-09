//sign in with google
import React from "react";
import { View, Button, Alert } from "react-native";
import { useAuth } from "../../hooks/auth";

const SignIn = () => {
  const { loading, handleSignInWithGoogle } = useAuth();
  const handleSignIn = async () => {
    try {
      await handleSignInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert(`${error}`);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Sign in with Google" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
