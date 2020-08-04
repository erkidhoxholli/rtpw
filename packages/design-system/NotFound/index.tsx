import React from 'react';
import { styled } from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${(props) => `${props.theme.colors.lightGray}`};
    border-radius: ${Dimensions.radius.medium};
    margin-top: ${Dimensions.spaces.medium};
`;
const Message = styled.h4`
    color: ${(props) => `${props.theme.colors.white}`};
    font-size: ${Dimensions.fontSize.medium};
`;

type NotFoundProps = {
    children: React.ReactNode;
};

const NotFound = ({ children }: NotFoundProps) => {
    return (
        <Wrapper>
            <Message>{children}</Message>
        </Wrapper>
    );
};

export default NotFound;
