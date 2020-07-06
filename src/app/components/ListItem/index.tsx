import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Dimensions from '../../constants/dimensions';
import { FormattedMessage } from 'react-intl';

type ListItemProps = {
    title: string;
    description?: string;
};

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: ${Dimensions.radius.medium};
    border: 1px solid ${Colors.darkGreen};
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
        <Description>{description ? description : <FormattedMessage id="app.home.repo.noDescription" />}</Description>
    </Wrapper>
);

export default ListItem;
