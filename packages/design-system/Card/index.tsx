import { styled } from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';

const Card = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
    padding: ${Dimensions.spaces.medium};
`;
export default Card;
