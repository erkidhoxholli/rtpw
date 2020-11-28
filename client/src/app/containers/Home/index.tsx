import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const HomeContainer = () => {
    const intl = useIntl();
    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>

        </Wrapper>
    );
};

export default HomeContainer;
