import React from 'react';

function Pagination({handlePageChange,currentPage,maxPage}) {
    return (
        <>
            <button onClick={() => handlePageChange(-1)}>PREVIOUS</button>
            <button onClick={() => handlePageChange(1)}>NEXT</button>
            <span>{currentPage}/{maxPage}</span>
        </>
    );
}

export default Pagination;