import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Colors from '@rtpw/design-system/constants/colors';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import {styled, Theme} from '@rtpw/design-system/constants/theme';
import messages from './messages';
import {FormattedMessage} from 'react-intl';
import LanguageSwitcher from "@rtpw/design-system/LanguageSwitcher";
import ThemeSwitcher from "@rtpw/design-system/ThemeSwitcher";

const Wrapper = styled.nav`
    height: 54px;
    border-bottom: 1px solid ${Colors.lightGray};
    background-color: ${(props) => props.theme.colors.green};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px ${Dimensions.spaces.small};

    & a {
        text-decoration: none;
        color: ${Colors.white};
        margin: 0px ${Dimensions.spaces.medium};
    }
`;

const RightMenu = styled.div`
  display: flex;
`

type LinkProps = {
    theme: Theme;
    active: number; // https://github.com/styled-components/styled-components/issues/1198
};

const StyledLink = styled(Link)`
    ${(props: LinkProps) => props.active && `border-bottom: 1px solid ${props.theme.colors.white}`}
`;

const MainMenu = styled.div``;

type NavProps = {
    isAuthenticated: boolean
    isAdmin: boolean
}
export const Navbar = ({isAuthenticated, isAdmin}: NavProps) => {
    const {pathname} = useLocation();

    return (
        <Wrapper>
            <MainMenu>
                <StyledLink to="/" active={pathname === '/' ? 1 : 0}>
                    <FormattedMessage {...messages.home} />
                </StyledLink>
                <StyledLink to="/about" active={pathname === '/about' ? 1 : 0}>
                    <FormattedMessage {...messages.about} />
                </StyledLink>

                {
                    !isAuthenticated && <StyledLink to="/register" active={pathname === '/register' ? 1 : 0}>
                        <FormattedMessage {...messages.signup} />
                    </StyledLink>
                }

                {
                    isAdmin && <StyledLink to="/users" active={pathname === '/users' ? 1 : 0}>
                        <FormattedMessage {...messages.users} />
                    </StyledLink>
                }
                {
                    !isAuthenticated && <StyledLink to="/login" active={pathname === '/login' ? 1 : 0}>
                        <FormattedMessage {...messages.login} />
                    </StyledLink>
                }

            </MainMenu>
            <RightMenu>
                <LanguageSwitcher/>
                <ThemeSwitcher/>
            </RightMenu>
        </Wrapper>
    );
};
