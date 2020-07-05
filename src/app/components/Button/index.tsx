import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    title: string;
};

const Wrapper = styled.button``;

const Button = ({ title }: ButtonProps) => <Wrapper>{title}</Wrapper>;

export default Button;
