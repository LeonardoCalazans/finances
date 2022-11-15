import styled from "styled-components/native";
import { theme } from "../../utils/theme/theme";

const background = theme.colors.background;
const green = theme.colors.green;
const secondary100 = theme.colors.secondary100;

export const Wrapper = styled.ScrollView`
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
    padding-bottom: 16px;
`;

export const ButtonSignOut = styled.TouchableOpacity`
    background-color: ${secondary100};
    padding: 16px;
    margin: 16px 0;
    `;

export const ButtonSignOutText = styled.Text`
    color: ${background};
    font-size: 16px;
    text-align: center;
`;

