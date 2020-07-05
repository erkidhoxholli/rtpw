import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import HomeContainer from './containers/Home';
import AboutContainer from './containers/About';
import ResponsiveContainer from './components/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';

const App = () => (
    <>
        <GlobalStyle />
        <Navbar title="Rimac Assignment" />
        <ResponsiveContainer>
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/about" component={AboutContainer} />
            </Switch>
        </ResponsiveContainer>
    </>
);

export default App;
