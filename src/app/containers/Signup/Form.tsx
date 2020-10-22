import {useIntl, FormattedMessage} from "react-intl";
import messages from "./messages";
import React, {useState} from "react";
import Button from "@rtpw/design-system/Button";
import Input from "@rtpw/hook-form/Input";
import Validator from "./validator";

interface IProps {
    onSubmit: any
}
export function Form({onSubmit}: IProps ) {
    const intl = useIntl()
    const validator = Validator(intl)
    return (
        <form onSubmit={onSubmit}>
            <Input label="Firstname" name="firstName" validators={validator.firstName} />
            <Input label="Lastname" name="lastName" validators={validator.firstName} />
            <Button title={<FormattedMessage {...messages.formCreateButton}/>} />
        </form>
    )
}