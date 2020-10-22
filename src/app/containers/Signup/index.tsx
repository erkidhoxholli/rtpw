import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {useIntl, FormattedMessage} from 'react-intl';
import messages from './messages';
import styled from "styled-components";
import {Form} from "./Form";
import {useForm, FormProvider} from "react-hook-form";

type FormInputs = {
    firstName: string,
    lastName: string,
    age: Number,
    email: string,
};

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const SignupContainer = () => {
    const intl = useIntl();
    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    const methods = useForm({defaultValues});

    const onSubmit = (evt:any) => {
        evt.preventDefault()
        methods.handleSubmit((data: any) => {
            console.log({data})
        })(evt)
    }
    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>
            <FormProvider {...methods}>
                <Form onSubmit={onSubmit}/>
            </FormProvider>
        </Wrapper>
    );
};

export default SignupContainer;
