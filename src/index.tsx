import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app/App';
import enTranslations from './i18n/en.json';
import plTranslations from './i18n/pl.json';
import ErrorBoundary from './app/components/ErrorBoundary';
import {ApolloProvider} from '@apollo/react-hooks';
import graphQLClient from './app/utils/client.graphql';
import {ThemeProvider} from 'styled-components';
import {LanguageConsumer, LanguageProvider} from "./app/context/LanguageContext";
import {ThemeConsumer, ThemeChangeProvider} from "./app/context/ThemeContext";

const messages = {
    en: enTranslations,
    pl: plTranslations,
};

ReactDOM.render(
    <LanguageProvider>
        <LanguageConsumer>
            {({language}) => (
                <IntlProvider locale={language} messages={messages[language]}>
                    <ThemeChangeProvider>
                    <ThemeConsumer>
                        {({theme}) => (
                            <ThemeProvider theme={theme}>
                                <ErrorBoundary>
                                    <ApolloProvider client={graphQLClient}>
                                        <Router>
                                            <App/>
                                        </Router>
                                    </ApolloProvider>
                                </ErrorBoundary>

                            </ThemeProvider>
                        )}
                    </ThemeConsumer>
                    </ThemeChangeProvider>
                </IntlProvider>
            )}
        </LanguageConsumer>
    </LanguageProvider>,
    document.querySelector('#root'),
);
