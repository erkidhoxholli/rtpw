import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';

type NavbarProps = {
    title: string;
};

const Wrapper = styled.nav`
    height: 40px;
    border-bottom: 1px solid ${Colors.lightGray};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Navbar = ({ title }: NavbarProps) => (
    <Wrapper>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </Wrapper>
);
