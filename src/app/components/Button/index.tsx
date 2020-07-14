import React from 'react';
import { styled } from '../../constants/theme';
import Dimensions from '../../constants/dimensions';
import Colors from '../../constants/colors';

type ButtonProps = {
    title: React.ReactNode | string;
    disabled?: boolean;
    onClick?: (evt?: React.MouseEvent<HTMLInputElement>) => void;
};

const Wrapper = styled.button`
    background-color: ${(props) => `${props.theme.colors.green}`};
    border: ${(props) => `1px solid ${props.theme.colors.green}`};
    border-radius: ${Dimensions.radius.small};
    color: ${Colors.white};
    height: 30px;

    ${(props) =>
        props.disabled &&
        `
    background-color: ${props.theme.colors.lightGreen};
    border-color: ${props.theme.colors.lightGreen}`};
`;

const Button = ({ title, disabled, onClick }: ButtonProps) => (
    <Wrapper disabled={disabled} onClick={onClick}>
        {title}
    </Wrapper>
);

export default Button;
