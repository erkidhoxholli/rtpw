import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Dimensions from '../../constants/dimensions';

type NavbarProps = {
    title: string;
};

const Wrapper = styled.nav`
    height: 40px;
    border-bottom: 1px solid ${Colors.lightGray};
    background-color: ${Colors.green};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & a {
        text-decoration: none;
        color: ${Colors.white};
        margin: 0px ${Dimensions.spaces.medium};
    }
`;

type LinkProps = {
    active: number; // https://github.com/styled-components/styled-components/issues/1198
};

const StyledLink = styled(Link)`
    ${(props: LinkProps) => props.active && `border-bottom: 1px solid ${Colors.white}`}
`;

export const Navbar = ({ title }: NavbarProps) => {
    const { pathname } = useLocation();

    return (
        <Wrapper>
            <StyledLink to="/" active={pathname === '/' ? 1 : 0}>
                Home
            </StyledLink>
            <StyledLink to="/about" active={pathname === '/about' ? 1 : 0}>
                About
            </StyledLink>
        </Wrapper>
    );
};
