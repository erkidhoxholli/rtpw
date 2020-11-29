import React, {useState} from 'react';
import styled from 'styled-components';
import {darken} from 'polished';
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";

const defaultColor = 'darkslategray';

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${props => props.theme.textColor || defaultColor};
`;

const Label = styled.label`
  font-size: ${Dimensions.fontSize.normal};
`;

interface InputProps {
    hasError?: boolean;
}

const Input = styled.input<InputProps>`
  outline: none;
  border-radius: 3px;
  font-size: ${Dimensions.fontSize.medium};
  padding: ${Dimensions.spaces.medium};
  border: 1px solid ${props => props.theme.colors.lightGray || defaultColor};
  ${props => props.hasError && `border-color: ${Colors.errorRed}`};
  &:focus {
    border: 1px solid ${props =>
    darken(0.1, props.theme.colors.lightGray || defaultColor)
};
  }
`;


type FloatingInputProps = {
    label: any,
    value?: string,
    name: string,
    type?: string,
    hasError?: boolean,
    onChange?: (evt?: React.ChangeEvent<HTMLInputElement>) => void
    innerRef: React.RefObject<HTMLInputElement>;
};


function FloatingInput({label, type, innerRef, name, hasError, value, onChange, ...rest}: FloatingInputProps) {
    const handleLabelClick = () => {
        if (!value) {
            innerRef?.current?.focus();
        }
    };

    return (
        <TextFieldWrapper>
            <Label onClick={handleLabelClick}>
                {label}
            </Label>

            <Input
                value={value}
                onChange={onChange}
                name={name}
                type={type}
                ref={innerRef}
                hasError={hasError}
                {...rest}
            />
        </TextFieldWrapper>
    );
}

export default FloatingInput