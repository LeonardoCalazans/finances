import React from "react";
import { Alert, ActivityIndicator } from "react-native";
import GoogleSvg from "../../assets/svg/GoogleSvg";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../utils/theme/theme";
import {
  ButtonLoginWithGoogle,
  Wrapper,
  Title,
  SubTitle,
  TitleWithGoogle,
} from "./styles";

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
    <Wrapper
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Wrapper
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title>
          Conecte-se {`\n`}e organize suas {`\n`}
          finanças
        </Title>
        <SubTitle>
          Crie sua lista de gastos e {`\n`}
          entradas para organizar suas {`\n`}
          finanças
        </SubTitle>
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : (
          <ButtonLoginWithGoogle onPress={handleSignIn}>
            <GoogleSvg width={24} height={24} />
            <TitleWithGoogle>Sign in with Google</TitleWithGoogle>
          </ButtonLoginWithGoogle>
        )}
      </Wrapper>
    </Wrapper>
  );
};

export default SignIn;
