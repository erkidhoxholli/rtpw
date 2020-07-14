import React from 'react';
import { styled } from '../../constants/theme';
import Dimensions from '../../constants/dimensions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

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

const NotFound = () => {
    return (
        <Wrapper>
            <Message>
                <FormattedMessage {...messages.notFound} />
            </Message>
        </Wrapper>
    );
};

export default NotFound;
