import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import ResponsiveContainer from './components/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';
import Spinner from './components/Spinner';

const HomeContainer = lazy(() => import('./containers/Home'));
const AboutContainer = lazy(() => import('./containers/About'));

const App = () => (
    <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Navbar />
        <ResponsiveContainer>
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/about" component={AboutContainer} />
            </Switch>
        </ResponsiveContainer>
    </Suspense>
);

export default App;
