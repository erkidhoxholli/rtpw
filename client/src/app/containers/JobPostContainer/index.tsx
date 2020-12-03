import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import {useParams} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import ErrorMessage from "../../../../packages/design-system/ErrorMessage";
// @ts-ignore
import querySingleJob from "./querySingleJob.graphql";
import Spinner from "@rtpw/design-system/Spinner";
import Card from "@rtpw/design-system/Card";
import Job from "../../models/Job";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Title = styled.h4``
const Company = styled.h5``
const JobPostContainer = () => {
    const intl = useIntl();
    const {id: jobID} = useParams();
    const {loading, error, data} = useQuery(querySingleJob, {
        variables: {id: Number(jobID)},
    });

    if (error) return <ErrorMessage message={error.message}/>
    if (loading) return <Spinner/>
    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>
            <Card>
                <Title>{data.job.title}</Title>
                <Company>{data.job.company}</Company>
            </Card>
        </Wrapper>
    );
};

export default JobPostContainer;
