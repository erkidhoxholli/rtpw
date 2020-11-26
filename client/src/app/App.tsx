import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import ResponsiveContainer from '@rtpw/design-system/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';
import Spinner from '@rtpw/design-system/Spinner';

const HomeContainer = lazy(() => import('./containers/Home'));
const AboutContainer = lazy(() => import('./containers/About'));
const SignupContainer = lazy(() => import('./containers/Signup'));
const ListUsersContainer = lazy(() => import('./containers/ListUsers'));

const App = () => (
    <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Navbar />
        <ResponsiveContainer>
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/about" component={AboutContainer} />
                <Route path="/register" component={SignupContainer} />
                <Route path="/users" component={ListUsersContainer} />
            </Switch>
        </ResponsiveContainer>
    </Suspense>
);

export default App;