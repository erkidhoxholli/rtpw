import React, {FunctionComponent} from 'react'
import {useQuery} from "@apollo/react-hooks";
// @ts-ignore
import queryViewer from './queryViewer.graphql';

interface AuthContextI {
    isAuthenticated: boolean,
    isAdmin: boolean
}

const AuthContext = React.createContext<AuthContextI | null>(null);

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider: FunctionComponent = ({children}) => {
    const {loading, error, data} = useQuery(queryViewer)

    if (loading || error) return null

    const languageContextValue: AuthContextI = {
        isAuthenticated: !!data?.viewer.id,
        isAdmin: data?.viewer.role === 'admin'
    };

    return (
        <AuthContext.Provider value={languageContextValue}>
            {children}
        </AuthContext.Provider>
    );
}

