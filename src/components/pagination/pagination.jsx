import React from 'react';
import { css } from 'emotion';

const paginationStyle = css`
    display: flex;
    font-family: Arial, sans-serif;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const buttons = css`
    display: flex;
    flex-direction: row;
`;

const button = css`
    padding: 5px 10px;
`;

const Pagination = ({ pageCount, currentPage, changePage }) => {
    const prevPage = currentPage > 1 ? () => changePage(currentPage - 1) : null;
    const nextPage = currentPage < pageCount ? () => changePage(currentPage + 1) : null;

    return (
        <div className={paginationStyle}>
            <div>
                {currentPage} of {pageCount}
            </div>
            <div className={buttons}>
                <div className={button} onClick={prevPage}>
                    Prev
                </div>
                <div className={button} onClick={nextPage}>
                    Next
                </div>
            </div>
        </div>
    );
};

export default Pagination;
