import {useIntl, FormattedMessage} from "react-intl";
import messages from "./messages";
import React, {useState} from "react";
import Button from "@rtpw/design-system/Button";
import Input from "@rtpw/hook-form/Input";
import Validator from "./validator";
import {FormStateProxy} from "react-hook-form";

interface IProps {
    onSubmit: any
    formState: FormStateProxy
}

// TODO: manage button disabled and readonly values for inputs when submitting
export function Form({onSubmit}: IProps) {
    const intl = useIntl()
    const validator = Validator(intl)

    return (
        <form onSubmit={onSubmit}>
            <Input type="email" label={intl.formatMessage(messages.formEmailLabel)} name="email"
                   validators={validator.email}/>
            <Input type="password" label={intl.formatMessage(messages.formPasswordLabel)} name="password"
                   validators={validator.password}/>
            <Button title={<FormattedMessage {...messages.formCreateButton}/>}/>
        </form>
    )
}