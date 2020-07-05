import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App';
import enTranslations from './i18n/en.json';
import ErrorBoundary from './app/components/ErrorBoundary';
import { ApolloProvider } from '@apollo/react-hooks';
import graphQLClient from './app/utils/client.graphql';

const messages = {
    en: enTranslations,
};

const language = 'en'; // we can get this from navigator/storage

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <ErrorBoundary>
            <ApolloProvider client={graphQLClient}>
                <Router>
                    <App />
                </Router>
            </ApolloProvider>
        </ErrorBoundary>
    </IntlProvider>,
    document.querySelector('#root'),
);
