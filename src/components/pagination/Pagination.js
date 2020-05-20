import React from 'react';
import "./Pagination.scss";

function Pagination({handlePageChange, currentPage, maxPage}) {
    return (
        <div className="pagination-container">
            <button onClick={() => handlePageChange(-1)}
                    className="btn btn-previous">
                PREVIOUS
            </button>
            <button onClick={() => handlePageChange(1)}
                    className="btn btn-next">
                NEXT
            </button>
            <p className="page-indicator">{currentPage}/{maxPage}</p>
        </div>
    );
}

export default Pagination;