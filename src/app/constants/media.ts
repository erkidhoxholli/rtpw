// https://github.com/styled-components/styled-components/issues/2303
import { css, ThemedCssFunction, ThemedBaseStyledInterface } from 'styled-components';

const sizes = {
    largeDesktop: 1440,
    desktop: 1000,
    tablet: 768,
    tabletPortrait: 640,
    phone: 414,
};

// Iterate through the sizes and create a media template
const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce((acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
        @media (max-width: ${sizes[label]}px) {
            ${css(first, ...interpolations)}
        }
    `;

    return acc;
}, {} as { [key in keyof typeof sizes]: ThemedCssFunction<ThemedBaseStyledInterface<any>> });

export default media;
