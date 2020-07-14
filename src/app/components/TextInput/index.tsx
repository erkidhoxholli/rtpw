import React from 'react';
import { styled } from '../../constants/theme';

import Dimensions from '../../constants/dimensions';

type TextInputProps = {
    placeholder?: string;
    value: string;
    label: React.ReactNode | string;
    onChange?: (evt?: React.ChangeEvent<HTMLInputElement>) => void;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    height: 30px;
    border-radius: ${Dimensions.radius.small};
    border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
    padding: ${Dimensions.spaces.small};
`;

const Label = styled.label`
    color: ${(props) => `${props.theme.colors.darkGray}`};
`;

const TextInput = ({ placeholder, label, value, onChange }: TextInputProps) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input type="text" placeholder={placeholder} value={value} onChange={onChange}></Input>
    </Wrapper>
);

export default TextInput;
