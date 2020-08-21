import React, {useState} from 'react';
import {styled} from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import Colors from '@rtpw/design-system/constants/colors';
import Button from "../Button";
import {LanguageConsumer} from "../../../src/app/context/LanguageContext";
import Languages from "../../../src/app/constants/languages";

type SwitcherProps = {
    onSwitch?: (evt?: React.MouseEvent<HTMLInputElement>) => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LanguageSwitcher = ({onSwitch}: SwitcherProps) => {
    return (
        <LanguageConsumer>
            {({updateLanguage, language}) => (
                <Wrapper>
                    <Button disabled={language === Languages.english.code} title={Languages.english.name}
                            onClick={() => updateLanguage(Languages.english.code)}/>
                    <Button disabled={language === Languages.polish.code} title={Languages.polish.name}
                            onClick={() => updateLanguage(Languages.polish.code)}/>
                </Wrapper>
            )}
        </LanguageConsumer>
    )
}


export default LanguageSwitcher;
