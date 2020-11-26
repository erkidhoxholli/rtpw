import React from 'react';
import { styled } from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

type ListItemProps = {
    title: string;
    description?: string;
};

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: ${Dimensions.radius.medium};
    border: ${(props) => `1px solid ${props.theme.colors.darkGreen}`};
    padding: ${Dimensions.spaces.xsmall} ${Dimensions.spaces.large};
    margin: ${Dimensions.spaces.small} 0px;
`;

const Title = styled.h4`
    text-transform: capitalize;
    margin-bottom: ${Dimensions.spaces.xsmall};
    font-size: ${Dimensions.fontSize.large};
    font-weight: 800;
`;

const Description = styled.p`
    text-transform: capitalize;
    margin-top: 0;
`;

const ListItem = ({ title, description }: ListItemProps) => (
    <Wrapper>
        <Title>{title}</Title>
        <Description>{description ? description : <FormattedMessage {...messages.noDescription} />}</Description>
    </Wrapper>
);

export default ListItem;
