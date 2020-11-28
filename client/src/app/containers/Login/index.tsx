import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {useIntl, FormattedMessage} from 'react-intl';
import messages from './messages';
import styled from "styled-components";
import {Form} from "./Form";
import {useForm, FormProvider} from "react-hook-form";
import {useMutation} from "@apollo/react-hooks";
// @ts-ignore
import authLoginUser from './authLoginUser.graphql';


const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


interface Signup {
    email: string
    password: string
}

const defaultValues = {
    email: '',
    password: ''
}

const LoginContainer = () => {
    const intl = useIntl();
    const [loginUser, {data: authResponse}] = useMutation(authLoginUser);
    const methods = useForm({defaultValues});

    useEffect(() => {
        console.log({authResponse})
        if (authResponse) {
            window.localStorage.setItem('token', authResponse?.login?.token)
            window.location.reload()
        }
    }, [authResponse])

    const onSubmit = (evt: any) => {
        evt.preventDefault()
        methods.handleSubmit((data: Signup) => {
            const {email, password} = data
            loginUser({variables: {email, password}});
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

export default LoginContainer;
