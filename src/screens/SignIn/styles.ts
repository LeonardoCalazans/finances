import styled from "styled-components/native";
import { theme } from "../../utils/theme/theme";

const background = theme.colors.background;
const text = theme.colors.text;

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonLoginWithGoogle = styled.TouchableOpacity`
    background-color: ${background};
    flex-direction: row;
    border-radius: 5px;
    padding: 15px;
    justify-content: space-around;
    align-items: center;
`;

export const TitleWithGoogle = styled.Text`
    color: ${text};
    padding-left: 15px;
`;

export const Title = styled.Text`
    color: ${text};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
    font-family: ${theme.fonts.title700};
    line-height: 40px;
`;

export const SubTitle = styled.Text`	
    color: ${text};
    font-size: 25px;
    text-align: center;
    margin-bottom: 64px;
    font-family: ${theme.fonts.title500};
    line-height: 25px;
    padding: 24px;
`;

