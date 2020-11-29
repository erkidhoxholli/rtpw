import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Navbar} from './components/Navbar';
import ResponsiveContainer from '@rtpw/design-system/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';
import Spinner from '@rtpw/design-system/Spinner';

const ListJobsContainer = lazy(() => import('./containers/ListJobsContainer'));
const AboutContainer = lazy(() => import('./containers/About'));
const SignupContainer = lazy(() => import('./containers/Signup'));
const LoginContainer = lazy(() => import('./containers/Login'));
const ListUsersContainer = lazy(() => import('./containers/ListUsers'));

type AppProps = {
    isAuthenticated: boolean
    isAdmin: boolean
}

const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};

const App = ({isAuthenticated, isAdmin}: AppProps) => (
    <Suspense fallback={<Spinner/>}>
        <GlobalStyle/>
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin}/>
        <ResponsiveContainer>
            <Switch>
                <Route exact path="/" component={ListJobsContainer}/>
                <Route exact path="/about" component={AboutContainer}/>
                <Route exact path="/register" component={SignupContainer}/>
                <Route exact path="/login" component={LoginContainer}/>
                <PrivateRoute isAuthenticated={isAuthenticated} exact path="/users" component={ListUsersContainer}/>
            </Switch>
        </ResponsiveContainer>
    </Suspense>
);

export default App;
