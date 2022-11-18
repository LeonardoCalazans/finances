import styled from "styled-components/native";
import { theme } from "../../utils/theme/theme";
import CurrencyInput from "react-native-currency-input";

const green = theme.colors.green;
const textVariant = theme.colors.textVariant;
const text = theme.colors.text;
const background100 = theme.colors.background100;
const secondary85 = theme.colors.secondary85;
const red = theme.colors.red;

interface ButtonProps {
    disabled: boolean;
}

interface InputAmountProps {
    amountPositive: boolean;
}

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

export const TextInputAmount = styled(CurrencyInput).attrs(props => ({
    prefix: "R$ ",
    delimiter: ".",
    separator: ",",
    precision: 2,
})) <InputAmountProps>`
    flex: 1;
    font-size: 16px;
    color: ${props => props.amountPositive ? green : red};
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

export const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: ${props => props.disabled ? background100 : green};
    padding: 18px;
    border-radius: 5px;
    align-items: center;
    margin: 16px 0;
`;

export const TextButton = styled.Text`
    color: ${textVariant};
    font-size: 16px;
`;

export const WrapperIcon = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ButtonIcon = styled.TouchableOpacity`
    margin-top: 16px;
`;
