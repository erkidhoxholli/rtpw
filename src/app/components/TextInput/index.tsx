import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Dimensions from '../../constants/dimensions';

type TextInputProps = {
    placeholder?: string;
    value: string;
    onChange?: (evt?: React.ChangeEvent<HTMLInputElement>) => void;
};

const Wrapper = styled.input`
    height: 30px;
    border-radius: ${Dimensions.radius.small};
    border: 1px solid ${Colors.lightGray};
    padding: ${Dimensions.spaces.small};
`;

const TextInput = ({ placeholder, value, onChange }: TextInputProps) => (
    <Wrapper type="text" placeholder={placeholder} value={value} onChange={onChange}></Wrapper>
);

export default TextInput;
