import { styled } from '@rtpw/design-system/constants//theme';
import Dimensions from '@rtpw/design-system/constants//dimensions';
import media from '@rtpw/design-system/constants//media';

const ResponsiveContainer = styled.div`
    max-width: ${Dimensions.containerWidth.xlarge};
    margin: ${Dimensions.spaces.medium} auto;

    ${media.phone`
        max-width: 100%;
        margin: ${Dimensions.spaces.medium};
    `}
`;
export default ResponsiveContainer;
