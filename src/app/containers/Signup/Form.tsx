import FloatingInput from "@rtpw/design-system/FloatingInput";
import {FormattedMessage} from "react-intl";
import messages from "./messages";
import React, {useState} from "react";
import Select from "@rtpw/design-system/Select";
import Button from "@rtpw/design-system/Button";
import {useForm} from "react-hook-form";

const options = [
    { value: 'sopot', label: 'Sopot' },
    { value: 'gdansk', label: 'Gdansk' },
]

interface IProps {
    onSubmit: any
}
export function Form({onSubmit}: IProps ) {
    const [ firstname, setFirstname ] = useState<string>("");
    const [ lastname, setLastname ] = useState<string>("");

    return (
        <form onSubmit={onSubmit}>
            <FloatingInput label={<FormattedMessage {...messages.formFirstnameLabel}/>} value={firstname} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setFirstname(evt.target.value)}/>
            <FloatingInput label={<FormattedMessage {...messages.formLastnameLabel}/>} value={lastname} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setLastname(evt.target.value)}/>
            <Select options={options}/>
            <Button title={<FormattedMessage {...messages.formCreateButton}/>} />
        </form>
    )
}