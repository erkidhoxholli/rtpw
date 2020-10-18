import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from "react-hook-form";
import messages from './messages';
import styled from "styled-components";
import {Form} from "./Form";

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
    const { register, handleSubmit, watch, errors } = useForm<FormInputs>();
    const onSubmit = (data: any) => console.log(data);

    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>

            <Form onSubmit={() => handleSubmit(onSubmit)}/>
        </Wrapper>
    );
};

export default SignupContainer;
