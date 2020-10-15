import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import ResponsiveContainer from '@rtpw/design-system/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';
import Spinner from '@rtpw/design-system/Spinner';

const HomeContainer = lazy(() => import('./containers/Home'));
const AboutContainer = lazy(() => import('./containers/About'));
const SignupContainer = lazy(() => import('./containers/Signup'));

const App = () => (
    <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Navbar />
        <ResponsiveContainer>
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/about" component={AboutContainer} />
                <Route path="/auth/signup" component={SignupContainer} />
            </Switch>
        </ResponsiveContainer>
    </Suspense>
);

export default App;
