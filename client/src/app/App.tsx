import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Navbar} from './components/Navbar';
import ResponsiveContainer from '@rtpw/design-system/ResponsiveContainer';
import GlobalStyle from './components/GlobalStyle';
import Spinner from '@rtpw/design-system/Spinner';

const HomeContainer = lazy(() => import('./containers/Home'));
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

const GuestRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? <Redirect to={{pathname: '/'}}/>
            : React.createElement(component, props)
    );
    return <Route {...rest} render={routeComponent}/>;
};

// TODO: protect routes based on authentication
const App = ({isAuthenticated, isAdmin}: AppProps) => (
    <Suspense fallback={<Spinner/>}>
        <GlobalStyle/>
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin}/>
        <ResponsiveContainer>
            <Switch>
                <GuestRoute isAuthenticated={isAuthenticated} exact path="/" component={HomeContainer}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/about" component={AboutContainer}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/register" component={SignupContainer}/>
                <GuestRoute isAuthenticated={isAuthenticated} path="/login" component={LoginContainer}/>
                <PrivateRoute isAuthenticated={isAuthenticated} path="/users" component={ListUsersContainer}/>
            </Switch>
        </ResponsiveContainer>
    </Suspense>
);

export default App;
