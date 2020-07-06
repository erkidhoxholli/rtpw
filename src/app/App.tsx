import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { Navbar } from './components/Navbar';
import HomeContainer from './containers/Home';
import AboutContainer from './containers/About';
import ResponsiveContainer from './components/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
    const intl = useIntl();

    return (
        <>
            <GlobalStyle />
            <Navbar title={intl.formatMessage({ id: 'app.general.name' })} />
            <ResponsiveContainer>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/about" component={AboutContainer} />
                </Switch>
            </ResponsiveContainer>
        </>
    );
};

export default App;
