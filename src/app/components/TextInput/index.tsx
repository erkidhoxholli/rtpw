import React from 'react';
import { styled } from '../../constants/theme';

import Dimensions from '../../constants/dimensions';

type TextInputProps = {
    placeholder?: string;
    value: string;
    onChange?: (evt?: React.ChangeEvent<HTMLInputElement>) => void;
};

const Wrapper = styled.input`
    height: 30px;
    border-radius: ${Dimensions.radius.small};
    border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
    padding: ${Dimensions.spaces.small};
`;

const TextInput = ({ placeholder, value, onChange }: TextInputProps) => (
    <Wrapper type="text" placeholder={placeholder} value={value} onChange={onChange}></Wrapper>
);

export default TextInput;
