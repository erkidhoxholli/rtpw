import React, {useState} from 'react';
import {darkTheme, lightTheme, styled} from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import Colors from '@rtpw/design-system/constants/colors';
import Button from "../Button";
import {ThemeConsumer} from "../../../src/app/context/ThemeContext";
import {stringify} from "querystring";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThemeSwitcher = () => {
    return (
        <ThemeConsumer>
            {({updateTheme, name}) => (
                <Wrapper>
                    <Button title="light"
                            disabled={name==='light'}
                            onClick={() => updateTheme(lightTheme, 'light')}/>
                    <Button title="dark"
                            disabled={name==='dark'}
                            onClick={() => updateTheme(darkTheme, 'dark')}/>
                </Wrapper>
            )}
        </ThemeConsumer>
    )
}


export default ThemeSwitcher;
