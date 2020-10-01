// https://github.com/styled-components/styled-components/issues/1589#issuecomment-435613664
import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const lightTheme = {
    colors: {
        black: '#000000',
        white: '#FFFFFF',
        darkGray: '#747272',
        lightGray: '#B8C7CE',
        green: '#75c044',
        darkGreen: '#62A238',
        lightGreen: '#d5eac9',
        errorRed: '#BE190D',
    },
};

export const darkTheme = {
    colors: {
        black: '#000000',
        white: '#e0e0e0',
        darkGray: '#747272',
        lightGray: '#B8C7CE',
        green: '#57674e',
        darkGreen: '#526447',
        lightGreen: '#8a9f7f',
        errorRed: '#BE190D',
    }
}

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;