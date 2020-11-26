import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {useIntl, FormattedMessage} from 'react-intl';
import messages from './messages';
import styled from "styled-components";
import {useQuery, useMutation} from "@apollo/react-hooks";
// @ts-ignore
import queryAllUsers from './queryAllUsers.graphql';
import Spinner from '@rtpw/design-system/Spinner';
import ErrorMessage from "@rtpw/design-system/ErrorMessage";
import User from "../../models/User";


const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ListUsersContainer = () => {
    const intl = useIntl();
    const {loading, error, data: userData} = useQuery(queryAllUsers);
    if (loading) return <Spinner/>;
    if (error) return <ErrorMessage message={error.message}/>

    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>
            <ul>
                {
                    userData?.allUsers?.results?.map((user: User) => (
                        <li key={user.id}>
                            <h5>{user.name} {user.email}</h5>
                        </li>
                    ))
                }
            </ul>
        </Wrapper>
    );
};

export default ListUsersContainer;
