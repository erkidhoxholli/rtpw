import React from 'react';
import { styled } from '@rtpw/design-system/constants/theme';

// https://gist.github.com/knowbody/578b35164b69e867ed4913423f6bed30
const SpinnerSVG = styled.svg`
    animation: rotate 2s linear infinite;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;

    & .path {
        stroke: ${(props) => `${props.theme.colors.darkGreen}`};
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 20rem;
`;

const Spinner = () => (
    <Wrapper>
        <SpinnerSVG viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
        </SpinnerSVG>
    </Wrapper>
);

export default Spinner;
