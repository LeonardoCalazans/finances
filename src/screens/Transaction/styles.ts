import styled from "styled-components/native";
import { theme } from "../../utils/theme/theme";
import MapView from 'react-native-maps';
import { Dimensions } from "react-native";
import CurrencyInput from "react-native-currency-input";

const green = theme.colors.green;
const textVariant = theme.colors.textVariant;
const text = theme.colors.text;
const background = theme.colors.background;
const background100 = theme.colors.background100;
const secondary85 = theme.colors.secondary85;

export const Wrapper = styled.ScrollView.attrs({
    contentContainerStyle: {

    }
})`
    margin: 0 20px; 
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const TextInputTitle = styled.TextInput`
font-size: 16px;
    color: ${text};
    margin-top: 16px;
    padding: 18px 16px;
    background-color: ${background100};
    border-radius: 5px;
`;

export const TextInputDescription = styled.TextInput.attrs({
    multiline: true,
    maxLength: 150,
})`
    font-size: 16px;
    color: ${text};
    margin-top: 16px;
    padding: 18px 16px;
    background-color: ${background100};
    border-radius: 5px;
`;

export const TextInputDate = styled.TextInput`
    font-size: 16px;
    color: ${text};
    margin-top: 16px;
    padding: 18px 16px;
    background-color: ${background100};
    border-radius: 5px;
`;

export const TextInputAmount = styled(CurrencyInput).attrs({
    prefix: "R$ ",
    delimiter: ".",
    separator: ",",
    precision: 2,
})`
    font-size: 16px;
    color: ${text};
    margin-top: 16px;
    padding: 18px 16px;
    background-color: ${background100};
    border-radius: 5px;
`;

export const ButtonIOsDate = styled.TouchableOpacity`
    background-color: ${secondary85};
    padding: 10px;
    border-radius: 5px;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${green};
    padding: 18px;
    border-radius: 5px;
    align-items: center;
    margin: 16px 0;
`;

export const TextButton = styled.Text`
    color: ${textVariant};
    font-size: 16px;
`;

export const Maps = styled(MapView)`
    width: 100%;
    /* width: ${Dimensions.get('window').width}px; */
    height: 300px;

    /* height: ${Dimensions.get('window').height}px; */
`;

export const WrapperMaps = styled.View`
`;
