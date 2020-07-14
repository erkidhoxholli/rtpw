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

import Sort, { SortByEnum } from '../../components/Repos/Sort';
import Card from '../../components/Card';
import Dimensions from '../../constants/dimensions';
import NotFound from '../../components/NotFound';
import media from '../../constants/media';
import messages from './messages';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const Left = styled.div`
    display: flex;
    flex: 1.5;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
`;

const SearchPanel = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const UserPanel = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    margin-top: ${Dimensions.spaces.medium};

    ${media.phone`
        flex-direction: column;
    `}
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

    const sorterValue = sortByName === SortByEnum.ASC ? SortByEnum.DESC : SortByEnum.ASC;

    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>
            <SearchPanel>
                <TextInput value={search} onChange={(evt) => debouncedSearch(evt.target.value)} />
            </SearchPanel>

            {isUserFound ? (
                <UserPanel>
                    <Left>
                        <Card>
                            <UserInfo {...userInfo} />
                        </Card>
                    </Left>
                    <Right>
                        <Card>
                            <Sort sortByName={sorterValue} onClick={() => setSortByName(sorterValue)} />
                            <Repos data={edges} />
                        </Card>
                    </Right>
                </UserPanel>
            ) : (
                <NotFound />
            )}
        </Wrapper>
    );
};

export default HomeContainer;
