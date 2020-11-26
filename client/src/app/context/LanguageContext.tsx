import React, {Component} from 'react'
import Languages from "../constants/languages";

interface LanguageContextInterface {
    language: string,
    updateLanguage: (language: string) => void
}

const LanguageContext = React.createContext<LanguageContextInterface | null>(null);

export const LanguageConsumer = LanguageContext.Consumer;

export class LanguageProvider extends Component {
    state = {language: Languages.english.code};

    updateLanguage = (language: string) => this.setState({language});

    render() {
        const {language} = this.state
        const {children} = this.props
        const languageContextValue: LanguageContextInterface = {
            language: language,
            updateLanguage: this.updateLanguage
        };

        return (
            <LanguageContext.Provider value={languageContextValue}>
                {children}
            </LanguageContext.Provider>
        );
    }
}