// @ts-nocheck
import React, {memo} from "react";
import { useFormContext } from "react-hook-form";
import FloatingInput from "@rtpw/design-system/FloatingInput";
import FormError from "@rtpw/design-system/FormError";

interface IProps {
    name: string
    label: string
    validators: any
}

const NestedInput = memo(
    ({ name, value, label, validators, register, formState: {errors, ...otherState}}) => (
        <>
            <FloatingInput hasError={errors[name]} label={label} name={name} innerRef={register(validators)}/>
            {errors[name] && <FormError>{errors[name]?.message}</FormError>}
        </>
    ),
);

export default function Input({name, label, validators}: IProps) {
    const methods = useFormContext();
    return <NestedInput validators={validators} label={label} name={name} {...methods} />;
};