// @ts-ignore
import React from 'react';
import {styled} from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import Colors from '@rtpw/design-system/constants/colors';
// @ts-ignore
import ReactPaginate from 'react-paginate';
import {createGlobalStyle} from "styled-components";

type PaginationProps = {
    pageCount: number;
    onPageChange?: (evt?: React.MouseEvent<HTMLInputElement>) => void;
};

const Styles = createGlobalStyle`
  .pagination {
    list-style-type: none;
    display: flex;
    flex: 1;
    justify-content: center;
    
    li {
        font-size: 14px;
        text-align: center;
        border-radius: 3px;
        background-color: ${Colors.lightGray};
        color: ${Colors.darkGray};
        margin-right: ${Dimensions.spaces.xsmall};
        cursor: pointer;
        height: 25px;
        display: flex;
        align-items: center;
    }
    
    li.active {
          background-color: ${Colors.darkGray};
          color: ${Colors.white};
    }
    
    li a {
       padding: 10px;
    }
    
    li.next {
          background-color: #cbcbcb;
          color: ${Colors.darkGray};

    }
    li.previous {
          background-color: #cbcbcb;
    }
  }
`

const Pagination = ({pageCount, onPageChange}: PaginationProps) => (
    <>
        <Styles/>
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            activeClassName={'active'}
            containerClassName={'pagination'}
            subContainerClassName={'pages'}
        />
    </>
);

export default Pagination;
