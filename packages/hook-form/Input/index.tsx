// @ts-nocheck
import React, {memo} from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
    name: string
    validators: any
}

// TODO: prevent re-rendering when ...
const NestedInput = memo(
    ({ name, validators, register, formState: {errors}}) => (
        <div>
            <input name={name} ref={register(validators)} />
            <p>{errors[name]?.message}</p>
        </div>
    ),
);

export default function Input({name, validators}: IProps) {
    const methods = useFormContext();

    return <NestedInput validators={validators} name={name} {...methods} />;
};