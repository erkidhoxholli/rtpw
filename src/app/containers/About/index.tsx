import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Text = styled.p``;

const AboutContainer = () => {
    const intl = useIntl();
    return (
        <>
            <Helmet>
                <title>{intl.formatMessage({ id: 'app.about.title' })}</title>
            </Helmet>
            <Text>
                <FormattedMessage id="app.about.description" />
            </Text>
        </>
    );
};

export default AboutContainer;
