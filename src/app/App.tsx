import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import { Navbar } from './components/Navbar';
import HomeContainer from './containers/Home';
import AboutContainer from './containers/About';
import ResponsiveContainer from './components/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';
import { defaultTheme } from './constants/theme';

const App = () => {
    const intl = useIntl();

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Navbar />
            <ResponsiveContainer>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/about" component={AboutContainer} />
                </Switch>
            </ResponsiveContainer>
        </ThemeProvider>
    );
};

export default App;
