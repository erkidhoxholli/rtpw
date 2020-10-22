import {useIntl, FormattedMessage} from "react-intl";
import messages from "./messages";
import React, {useState} from "react";
import Button from "@rtpw/design-system/Button";
import Input from "@rtpw/hook-form/Input";
import Validator from "./validator";

interface IProps {
    onSubmit: any
}

// TODO: manage button disabled and readonly values for inputs when submitting
export function Form({onSubmit}: IProps ) {
    const intl = useIntl()
    const validator = Validator(intl)

    return (
        <form onSubmit={onSubmit}>
            <Input type="text" label={intl.formatMessage(messages.formFirstnameLabel)} name="firstName" validators={validator.firstName} />
            <Input type="text" label={intl.formatMessage(messages.formFirstnameLabel)} name="lastName" validators={validator.lastName} />
            <Input type="email" label={intl.formatMessage(messages.formEmailLabel)} name="email" validators={validator.lastName} />
            <Input type="password" label={intl.formatMessage(messages.formPasswordLabel)} name="password" validators={validator.lastName} />
            <Button title={<FormattedMessage {...messages.formCreateButton}/>} />
        </form>
    )
}