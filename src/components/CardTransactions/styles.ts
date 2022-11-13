import styled from "styled-components/native";
import { theme } from "../../utils/theme/theme";

const green = theme.colors.green;
const text = theme.colors.text;
const red = theme.colors.red;
const darkBlue = theme.colors.darkBlue;

const font = theme.fonts;

type AmountProps = {
    amount: number;
}

export const Wrapper = styled.View`
    padding: 16px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 90%;
    height: 80px;
`;

export const Container = styled.View`
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
`;

export const WrapperDescriptions = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const WrapperCategoryAmount = styled.View`
    flex-direction: column;
    align-items: flex-end;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${text};
    padding-right: 12px;
    font-family: ${font.text500};
`;

export const Amount = styled.Text<AmountProps>`
    font-family: ${font.text500};
    color: ${props => props.amount > 0 ? green : red};
    `;

export const Description = styled.Text`
    font-size: 10px;
    color: ${darkBlue};
    font-family: ${font.text400};
`;

