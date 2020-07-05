import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export enum SortByEnum {
    ASC = 'ASC',
    DESC = 'DESC',
}

type SortProps = {
    onClick: (evt?: React.MouseEvent<HTMLInputElement>) => void;
    sortByName: SortByEnum;
};

const Wrapper = styled.button``;

const Sort = ({ onClick, sortByName }: SortProps) => (
    <Wrapper onClick={onClick}>
        <FormattedMessage id="app.home.repo.sortByName" /> {sortByName}
    </Wrapper>
);

export default Sort;
