import { styled } from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';

const ListItem = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    border-left: 5px solid #d05757;
    padding: ${Dimensions.spaces.medium};
    margin-bottom: ${Dimensions.spaces.medium};
`;
export default ListItem;
