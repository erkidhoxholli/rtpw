import React, {Component} from 'react'
import {lightTheme} from '@rtpw/design-system/constants/theme';

interface ThemeContextInterface {
    theme: any,
    name: string,
    updateTheme: (theme: any, name: string) => void
}

const ThemeContext = React.createContext<ThemeContextInterface>({
    updateTheme(theme: any): void {
    }, theme: lightTheme, name: 'light'
});

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeChangeProvider extends Component {
    state = {theme: lightTheme, name: 'light'};

    updateTheme = (theme: any, name: string) =>
        this.setState({theme, name});

    render() {
        const {theme, name} = this.state
        const {children} = this.props
        const themeContextValue: ThemeContextInterface = {
            theme: theme,
            name: name,
            updateTheme: this.updateTheme
        };

        return (
            <ThemeContext.Provider value={themeContextValue}>
                {children}
            </ThemeContext.Provider>
        );
    }
}