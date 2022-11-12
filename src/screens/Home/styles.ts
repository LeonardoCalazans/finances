import styled from "styled-components/native";
import { theme } from "../../utils/theme/theme";

const background = theme.colors.background;
const green = theme.colors.green;

export const Wrapper = styled.View`
    background-color: ${green};
    flex: 1;
`;

export const WrapperCards = styled.View`
    flex: 1;
    background-color: ${background};
    padding-top: 55px;
    margin-top: -55px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
`;


