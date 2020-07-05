import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Dimensions from '../../constants/dimensions';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${Colors.lightGray};
    border-radius: ${Dimensions.radius.medium};
`;
const Message = styled.h4`
    color: ${Colors.white};
    font-size: ${Dimensions.fontSize.medium};
`;

const NotFound = () => {
    return (
        <Wrapper>
            <Message>
                <FormattedMessage id="app.general.notFound" />
            </Message>
        </Wrapper>
    );
};

export default NotFound;
