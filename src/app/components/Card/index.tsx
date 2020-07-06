import styled from 'styled-components';

import Colors from '../../constants/colors';
import Dimensions from '../../constants/dimensions';

const Card = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    border: 1px solid ${Colors.lightGray};
    padding: ${Dimensions.spaces.medium};
`;
export default Card;
