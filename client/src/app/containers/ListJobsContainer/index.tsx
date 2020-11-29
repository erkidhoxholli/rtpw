import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import ListItem from "@rtpw/design-system/ListItem";
import Spinner from "@rtpw/design-system/Spinner";
import Pagination from "@rtpw/design-system/Pagination";
import {useQuery} from "@apollo/react-hooks";
// @ts-ignore
import queryAllJobs from "./queryAllJobs.graphql";
import ErrorMessage from "@rtpw/design-system/ErrorMessage";
import Job from "../../models/Job";
import GoogleMap from "../../components/GoogleMap";
import Dimensions from "../../../../packages/design-system/constants/dimensions";

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

const List = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LeftContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-right: ${Dimensions.spaces.huge};
`

const RightContainer = styled.div`
  flex: 1;

`

const ListJobsContainer = () => {
    const [page, setPage] = useState<number>(0)
    const intl = useIntl();
    const {loading, error, data: jobsData} = useQuery(queryAllJobs, {
        variables: {page, pageSize: 3},
    });

    if (error) return <ErrorMessage message={error.message}/>
    const pageInfo = jobsData?.allJobs?.pageInfo

    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>
            <LeftContainer>
                <List>
                    {
                        !loading ? jobsData?.allJobs?.results?.map((job: Job) => (
                            <ListItem key={job.id}>
                                <h5>{job.title} {job.company}</h5>
                            </ListItem>
                        )) : <Spinner/>
                    }
                </List>
                <Pagination
                    pageCount={pageInfo?.pageCount}
                    onPageChange={(data: any) => setPage(data?.selected)}
                />

            </LeftContainer>

            <RightContainer>
                <GoogleMap
                    center={{
                        lat: 55.55,
                        lng: 55.55
                    }}
                    markers={[
                        {lat: 55.55, lng: 55.55, text: "24eStore"},
                        {lat: 55.523, lng: 55.553, text: "Schibsted"},
                    ]}
                />
            </RightContainer>
        </Wrapper>
    );
};

export default ListJobsContainer;
