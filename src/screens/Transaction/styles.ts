import styled from "styled-components/native";
import { theme } from "../../utils/theme/theme";
import MapView from 'react-native-maps';
import { Dimensions } from "react-native";

const green = theme.colors.green;
const textVariant = theme.colors.textVariant;
const text = theme.colors.text;
const background = theme.colors.background;
const background100 = theme.colors.background100;

export const Wrapper = styled.View`
    flex: 1;
    background-color: ${background};
    padding: 0 24px;
`;

export const Title = styled.Text`

`;

export const TextButton = styled.Text`
    color: ${textVariant};
    font-size: 16px;
`;

export const TextDescription = styled.TextInput`
    font-size: 16px;
    color: ${text};
    margin-top: 16px;
    padding: 18px 16px;
    background-color: ${background100};
    border-radius: 5px;
`;

export const TextValue = styled.TextInput`
    font-size: 16px;
    color: ${text};
    margin-top: 16px;
    padding: 18px 16px;
    background-color: ${background100};
    border-radius: 5px;
    keyboard-type: numeric;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${green};
    padding: 18px;
    border-radius: 5px;
    align-items: center;
    margin-top: 16px;
`;

export const Maps = styled(MapView)`
    width: 100%;
    /* width: ${Dimensions.get('window').width}px; */
    height: 300px;

    /* height: ${Dimensions.get('window').height}px; */
`;

export const WrapperMaps = styled.View`
`;
