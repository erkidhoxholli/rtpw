// @ts-nocheck
import React, {memo} from "react";
import { useFormContext } from "react-hook-form";
import FloatingInput from "@rtpw/design-system/FloatingInput";
import FormError from "@rtpw/design-system/FormError";
import styled from "styled-components";
import Dimensions from "../../design-system/constants/dimensions";

const Wrapper = styled.div`
  margin-bottom: ${Dimensions.spaces.small};
`;

interface IProps {
    name: string
    label: string
    validators?: any
    type?: "text" | "email" | "password"
}

// TODO: pass the value to FloatingInput
const NestedInput = memo(
    ({ name, type, label, value, validators, register, formState: {errors, ...otherState}}) => (
        <Wrapper>
            <FloatingInput
                type={type}
                value={value}
                hasError={errors[name]}
                label={label}
                name={name}
                innerRef={register(validators)}
            />
            {errors[name] && <FormError>{errors[name]?.message}</FormError>}
        </Wrapper>
    ),
);

export default function Input({name, type, label, validators}: IProps) {
    const methods = useFormContext();
    return <NestedInput type={type} validators={validators} label={label} name={name} {...methods} />;
};