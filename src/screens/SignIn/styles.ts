import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../utils/theme/theme";

const background = theme.colors.background;
const text = theme.colors.text;

export const Wrapper = styled.View`
    flex: 1;    
    justify-content: "center";
    align-items: "center";
`;

export const ButtonLoginWithGoogle = styled(RectButton) <RectButtonProps>`
    width: 200;
    height: 48;
    flex-direction: "row";
    background-color: ${background};
    border-radius: 5;
    justify-content: "space-around";
    align-items: "center";
`;

export const TitleWithGoogle = styled.Text`
    color: ${text};
`;

export const Title = styled.Text`
    color: ${text};
    text-align: 'center';
    font-size: 40;
    margin-bottom: 16;
    font-family: ${theme.fonts.title700};
    line-height: 40;
`;

export const SubTitle = styled.Text`	
    color: ${text};
    font-size: 15;
    text-align: 'center';
    margin-bottom: 64;
    font-family: ${theme.fonts.title500};
    line-height: 25;
    padding: 24px;
`;

