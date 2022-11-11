import styled from 'styled-components/native';
import { theme } from "../../utils/theme/theme";

type WrapperProps = {
    backgroundColor?: string;
};

const background = theme.colors.background;
const text = theme.colors.text;

export const Wrapper = styled.View<WrapperProps>`
    width: 90%;
    margin: 10px auto;
    border-radius: 5px;
    background-color: ${props => props.backgroundColor || background};
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

export const Title = styled.Text`
    color: ${text};
    font-size: 16;
    margin-bottom: 12px;
`;

export const Value = styled.Text`
    color: ${text};
    font-size: 26px;
`;
