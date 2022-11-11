import styled from 'styled-components/native';
import { theme } from "../../utils/theme/theme";

type WrapperProps = {
    backgroundColor?: boolean;
    balance?: Number;
};

const background = theme.colors.background;
const text = theme.colors.text;
const textVariant = theme.colors.textVariant;
const green = theme.colors.green;
const red = theme.colors.red;

export const Wrapper = styled.View<WrapperProps>`
    width: 90%;
    margin: 10px auto;
    border-radius: 5px;
    background-color: ${props => props.backgroundColor ? (props.balance > 0 ? green : red) : background};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
`;

export const WrapperInfo = styled.View`
    padding-left: 12px;
    justify-content: space-around;
    align-content: space-around;
`;

export const Title = styled.Text<WrapperProps>`
    color: ${props => props.backgroundColor ? textVariant : text};
    font-size: 16px;
    margin-bottom: 12px;
`;

export const Value = styled.Text<WrapperProps>`
    color: ${props => props.backgroundColor ? textVariant : text};
    font-size: 26px;
    font-weight: bold;
`;
