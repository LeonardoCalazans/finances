import React from "react";
import { View, Text, Alert, Image, ActivityIndicator } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import GoogleSvg from "../../assets/svg/GoogleSvg";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../utils/theme/theme";
import { TitleWithGoogle } from "./styles";

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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>
          Conecte-se {`\n`}e organize suas {`\n`}
          finanças
        </Text>
        <Text>
          Crie sua lista de gastos e {`\n`}
          entradas para organizar suas {`\n`}
          finanças
        </Text>
        {loading ? (
          <ActivityIndicator color={theme.colors.primary} />
        ) : (
          <RectButton
            onPress={() => handleSignIn}
            style={{
              width: 200,
              height: 48,
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 5,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <GoogleSvg width={24} height={24} />
            <Text>Sign in with Google</Text>
          </RectButton>
        )}
      </View>
    </View>
  );
};

export default SignIn;
