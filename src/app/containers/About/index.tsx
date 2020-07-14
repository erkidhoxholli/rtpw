import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const Text = styled.p``;

const AboutContainer = () => {
    const intl = useIntl();
    return (
        <>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>
            <Text>
                <FormattedMessage {...messages.description} />
            </Text>
        </>
    );
};

export default AboutContainer;
