import React from 'react';
import { styled } from '@rtpw/design-system/constants/theme';
import Button from '@rtpw/design-system/Button';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

type PaginationProps = {
    onPageChange: (page: number) => void;
    perPage: number;
    currentPage: number;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const Text = styled.span`
    margin: 0 ${Dimensions.spaces.medium};
`;

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
    return (
        <Wrapper>
            <Button
                disabled={currentPage === 1}
                title={<FormattedMessage {...messages.previous} />}
                onClick={() => onPageChange(currentPage - 1)}
            />
            <Text>{currentPage}</Text>
            <Button title={<FormattedMessage {...messages.next} />} onClick={() => onPageChange(currentPage + 1)} />
        </Wrapper>
    );
};

export default Pagination;
