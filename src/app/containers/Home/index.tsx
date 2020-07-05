import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import TextInput from '../../components/TextInput';
import { useDebouncedCallback } from 'use-debounce';

import UserInfo from '../../components/UserInfo';
import { useQuery } from '@apollo/react-hooks';
// @ts-ignore
import queryReposByUsername from './queryReposByUsername.graphql';
import Spinner from '../../components/Spinner';
import styled from 'styled-components';
import Repos from '../../components/Repos';
import { doesUserExist } from './utils';
import NotFound from '../../components/NotFound';
import Sort, { SortByEnum } from '../../components/Repos/Sort';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const HomeContainer = () => {
    const intl = useIntl();
    const [search, setSearch] = useState('erkidhoxholli');
    const [sortByName, setSortByName] = useState(SortByEnum.ASC);

    const [debouncedSearch] = useDebouncedCallback((value: string) => {
        setSearch(value);
    }, 250);

    const { loading, error, data } = useQuery(queryReposByUsername, {
        variables: { username: search, sortByName },
    });
    const isUserFound = doesUserExist(error);

    if (loading) return <Spinner />;

    const {
        user: {
            repositories: { edges },
            ...userInfo
        },
    } = data;

    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage({ id: 'app.home.title' })}</title>
            </Helmet>

            <TextInput value={search} onChange={(evt) => debouncedSearch(evt.target.value)} />
            {isUserFound ? (
                <>
                    <UserInfo {...userInfo} />
                    <Sort
                        sortByName={sortByName}
                        onClick={() => setSortByName(sortByName === SortByEnum.ASC ? SortByEnum.DESC : SortByEnum.ASC)}
                    />
                    <Repos data={edges} />
                </>
            ) : (
                <NotFound />
            )}
        </Wrapper>
    );
};

export default HomeContainer;
