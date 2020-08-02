// https://github.com/styled-components/styled-components/issues/1589#issuecomment-435613664
import baseStyled, { ThemedStyledInterface } from 'styled-components';
import Colors from './colors';

export const defaultTheme = {
    colors: {
        ...Colors,
    },
};

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
