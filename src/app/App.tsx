import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import ResponsiveContainer from '@rtpw/design-system/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';
import Spinner from '@rtpw/design-system/Spinner';

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
            <pre>{JSON.stringify(process.env, undefined, 2)}</pre>
        </ResponsiveContainer>
    </Suspense>
);

export default App;
