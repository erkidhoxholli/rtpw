import styled from 'styled-components';
import Dimensions from '../../constants/dimensions';
import media from '../../constants/media';

const ResponsiveContainer = styled.div`
    max-width: ${Dimensions.containerWidth.xlarge};
    margin: ${Dimensions.spaces.medium} auto;

    ${media.phone`
        max-width: 100%;
        margin: ${Dimensions.spaces.medium};
    `}
`;
export default ResponsiveContainer;
