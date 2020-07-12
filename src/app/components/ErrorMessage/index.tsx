import React from 'react';
import { styled } from '../../constants/theme';
import Colors from '../../constants/colors';
import Dimensions from '../../constants/dimensions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.errorRed};
    border-radius: ${Dimensions.radius.medium};
`;
const Message = styled.h4`
    color: ${Colors.white};
    font-size: ${Dimensions.fontSize.medium};
`;

type ErrorMessageProps = {
    message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <Wrapper>
            <Message>{message}</Message>
        </Wrapper>
    );
};

export default ErrorMessage;
