import React, {useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import {darken} from 'polished';

const defaultColor = 'darkslategray';
const padV = 16;
const padH = 16;
const labelSize = 14;

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${props => props.theme.textColor || defaultColor};
`;

interface LabelProps {
    up?: boolean;
}
const Label = styled.label<LabelProps>`
  color: inherit;
  font-size: ${labelSize}px;
  will-change: transform;
  transition: transform 0.3s cubic-bezier(.06,.67,.32,.82);
  transform: translate(${padH}px, ${1.333 * labelSize + padV}px);
  ${props => props.up && css`
    transform: scale(0.8) translate(-2px, -2px);
  `}
`;

const Input = styled.input`
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  outline: none;
  border-radius: 3px;
  font-size: 16px;
  width: 100%;
  padding: ${padV}px ${padH}px;
  border: 1px solid ${props => props.theme.colors.lightGray || defaultColor};
  &:focus {
    border: 1px solid ${props =>
    darken(0.1, props.theme.colors.lightGray || defaultColor)
};
  }
`;


type FloatingInputProps = {
    label: any,
    value: string,
    onChange?: (evt?: React.ChangeEvent<HTMLInputElement>) => void;
};


export default function FloatingInput({label, value, onChange, ...rest}: FloatingInputProps) {
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [focused, setFocused] = useState<boolean>(false)

    const handleFocus = () => setFocused(true)

    const handleBlur = () => setFocused(false);

    const handleLabelClick = () => {
        if (!focused && !value) {
            setFocused(focused)
            inputRef?.current?.focus();
        }
    };

    return (
        <TextFieldWrapper>
            {label &&
            <Label
                up={focused || !!value}
                onClick={handleLabelClick}
            >
                {label}
            </Label>
            }

            <Input
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={inputRef}
                {...rest}
            />
        </TextFieldWrapper>
    );
}

