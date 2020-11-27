import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {useIntl, FormattedMessage} from 'react-intl';
import messages from './messages';
import styled from "styled-components";
import {useQuery, useMutation} from "@apollo/react-hooks";
import ListItem from '@rtpw/design-system/ListItem';
import Pagination from '@rtpw/design-system/Pagination';
// @ts-ignore
import ReactPaginate from 'react-paginate';

// @ts-ignore
import queryAllUsers from './queryAllUsers.graphql';
import Spinner from '@rtpw/design-system/Spinner';
import ErrorMessage from "@rtpw/design-system/ErrorMessage";
import User from "../../models/User";

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

const List = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ListUsersContainer = () => {
    const [page, setPage] = useState<number>(0)
    const intl = useIntl();
    const {loading, error, data: userData} = useQuery(queryAllUsers, {
        variables: {page, pageSize: 3},
    });

    if (error) return <ErrorMessage message={error.message}/>
    const pageInfo = userData?.allUsers?.pageInfo

    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>
            <List>
                {
                    !loading ? userData?.allUsers?.results?.map((user: User) => (
                        <ListItem key={user.id}>
                            <h5>{user.name} {user.email}</h5>
                        </ListItem>
                    )) : <Spinner/>
                }
            </List>
            <Pagination
                pageCount={pageInfo?.pageCount}
                onPageChange={(data: any) => setPage(data?.selected)}
            />
        </Wrapper>
    );
};

export default ListUsersContainer;
