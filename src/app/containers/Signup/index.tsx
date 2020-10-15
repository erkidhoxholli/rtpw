
import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from "react-hook-form";
import Input from "@rtpw/hook-form/Input"

import messages from './messages';
import FloatingInput from "../../../../packages/hook-form/FloatingInput";
import Button from "../../../../packages/design-system/Button";
import styled from "styled-components";

type Inputs = {
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
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const [ lastname, setLastname ] = useState<string>("");
    const [ firstname, setFirstname ] = useState<string>("");
    const onSubmit = (data: any) => console.log(data);

    return (
        <Wrapper>
            <Helmet>
                <title>{intl.formatMessage(messages.title)}</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FloatingInput label={<FormattedMessage {...messages.formFirstnameLabel}/>} value={firstname} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setFirstname(evt.target.value)}/>
                <FloatingInput label={<FormattedMessage {...messages.formLastnameLabel}/>} value={lastname} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setLastname(evt.target.value)}/>
                <Button title={<FormattedMessage {...messages.formCreateButton}/>} />
            </form>
        </Wrapper>
    );
};

export default SignupContainer;
