import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Colors from '@rtpw/design-system/constants/colors';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import { styled, Theme } from '@rtpw/design-system/constants/theme';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import LanguageSwitcher from "../../../../packages/design-system/LanguageSwitcher";

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
    theme: Theme;
    active: number; // https://github.com/styled-components/styled-components/issues/1198
};

const StyledLink = styled(Link)`
    ${(props: LinkProps) => props.active && `border-bottom: 1px solid ${props.theme.colors.white}`}
`;

export const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <Wrapper>
            <StyledLink to="/" active={pathname === '/' ? 1 : 0}>
                <FormattedMessage {...messages.home} />
            </StyledLink>
            <StyledLink to="/about" active={pathname === '/about' ? 1 : 0}>
                <FormattedMessage {...messages.about} />
            </StyledLink>
            <LanguageSwitcher />
        </Wrapper>
    );
};
