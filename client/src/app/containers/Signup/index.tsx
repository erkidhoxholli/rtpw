import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {useIntl, FormattedMessage} from 'react-intl';
import messages from './messages';
import styled from "styled-components";
import {Form} from "./Form";
import {useForm, FormProvider} from "react-hook-form";
import {useQuery, useMutation} from "@apollo/react-hooks";
// @ts-ignore
import queryAllUsers from '../ListUsers/queryAllUsers.graphql';
// @ts-ignore
import authSignupUser from './authSignupUser.graphql';


const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


interface Signup {
    name: string
    email: string
    password: string
}

const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const SignupContainer = () => {
    const intl = useIntl();
    const [createUser] = useMutation(authSignupUser);
    const methods = useForm({defaultValues});

    const onSubmit = (evt: any) => {
        evt.preventDefault()
        methods.handleSubmit((data: Signup) => {
            const {email, password, name} = data
            createUser({variables: {email, password, name}, refetchQueries: [{query: queryAllUsers}]});
        })(evt)
    }

    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>
            <FormProvider {...methods}>
                <Form onSubmit={onSubmit} {...methods}/>
            </FormProvider>
        </Wrapper>
    );
};

export default SignupContainer;
