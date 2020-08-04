import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import TextInput from '@rtpw/design-system/TextInput';
import { useDebouncedCallback } from 'use-debounce';
import { FormattedMessage } from 'react-intl';

import UserInfo from '../../components/UserInfo';
import { useQuery } from '@apollo/react-hooks';
// @ts-ignore
import queryReposByUsername from './queryReposByUsername.graphql';
import Spinner from '@rtpw/design-system/Spinner';
import styled from 'styled-components';
import Repos from '../../components/Repos';
import { doesUserExist } from './utils';

import Sort, { SortByEnum } from '../../components/Repos/Sort';
import Card from '@rtpw/design-system/Card';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import NotFound from '@rtpw/design-system/NotFound';
import media from '@rtpw/design-system/constants/media';
import messages from './messages';
import Pagination from '../../components/Pagination';

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
const PER_PAGE = 5;
const DEBOUNCE_DELAY = 250;

const HomeContainer = () => {
    const intl = useIntl();
    const [search, setSearch] = useState('erkidhoxholli');
    const [page, setPage] = useState(1);
    const [cursor, setCursor] = useState(null);
    const [sortByName, setSortByName] = useState(SortByEnum.ASC);

    const { loading, error, data } = useQuery(queryReposByUsername, {
        variables: { username: search, sortByName, perPage: PER_PAGE, afterCursor: cursor },
    });

    const [debouncedSearch] = useDebouncedCallback((value: string) => {
        setSearch(value);
    }, DEBOUNCE_DELAY);

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
                <TextInput
                    label={<FormattedMessage {...messages.searchLabel} />}
                    value={search}
                    onChange={(evt) => debouncedSearch(evt.target.value)}
                />
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
                            <Pagination
                                perPage={5}
                                currentPage={page}
                                onPageChange={(page) => {
                                    setPage(page);
                                    const cursor = data.user.repositories.edges[PER_PAGE - 1].cursor;

                                    if (page === 1) setCursor(null);
                                    else setCursor(cursor);
                                }}
                            />
                        </Card>
                    </Right>
                </UserPanel>
            ) : (
                <NotFound>
                    <FormattedMessage {...messages.notFound} />
                </NotFound>
            )}
        </Wrapper>
    );
};

export default HomeContainer;
