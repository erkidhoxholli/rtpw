import React from 'react';
import { styled } from '../../constants/theme';
import { FormattedMessage } from 'react-intl';
import Colors from '../../constants/colors';
import Dimensions from '../../constants/dimensions';

export enum SortByEnum {
    ASC = 'ASC',
    DESC = 'DESC',
}

type SortProps = {
    onClick: (evt?: React.MouseEvent<HTMLInputElement>) => void;
    sortByName: SortByEnum;
};

const Wrapper = styled.button`
    background-color: ${(props) => `${props.theme.colors.green}`};
    border: ${(props) => `1px solid ${props.theme.colors.green}`};
    border-radius: ${Dimensions.radius.small};
    color: ${Colors.white};
    cursor: pointer;
`;

const Sort = ({ onClick, sortByName }: SortProps) => (
    <Wrapper onClick={onClick}>
        <FormattedMessage id="app.home.repo.sortByName" /> {sortByName}
    </Wrapper>
);

export default Sort;
