import React, {useState} from 'react';
import {styled} from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import Colors from '@rtpw/design-system/constants/colors';
import Button from "../Button";
import {LanguageConsumer} from "../../../src/app/context/LanguageContext";
import Languages from "../../../src/app/constants/languages";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LanguageSwitcher = () => {
    const { english, polish } = Languages;
    return (
        <LanguageConsumer>
            {({updateLanguage, language}) => (
                <Wrapper>
                    <Button disabled={language === english.code} title={english.name}
                            onClick={() => updateLanguage(english.code)}/>
                    <Button disabled={language === polish.code} title={polish.name}
                            onClick={() => updateLanguage(polish.code)}/>
                </Wrapper>
            )}
        </LanguageConsumer>
    )
}


export default LanguageSwitcher;
