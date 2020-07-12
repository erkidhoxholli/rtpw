import { styled } from '../../constants/theme';
import Dimensions from '../../constants/dimensions';

const Card = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    border: ${(props) => `1px solid ${props.theme.colors.lightGray}`};
    padding: ${Dimensions.spaces.medium};
`;
export default Card;
