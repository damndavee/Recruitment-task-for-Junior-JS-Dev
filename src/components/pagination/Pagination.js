import React from 'react';
import "./Pagination.scss";

function Pagination({handlePageChange, currentPage, lastPage}) {
    const isUserOnFirstPage = currentPage === 1;
    const isUserOnLastPage = currentPage === lastPage;

    return (
        <div className="pagination-container">
            <button onClick={() => handlePageChange(-1)}
                    className="btn btn-previous"
                    disabled={isUserOnFirstPage}>
                PREVIOUS
            </button>
            <p className="page-indicator">{currentPage}/{lastPage}</p>
            <button onClick={() => handlePageChange(1)}
                    className="btn btn-next"
                    disabled={isUserOnLastPage}>
                NEXT
            </button>
        </div>
    );
}

export default Pagination;