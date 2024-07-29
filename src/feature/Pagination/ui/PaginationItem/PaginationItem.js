import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './PaginationItems.module.scss';

export function PaginatedItems({ pageCount, setPage }) {
    const handlePageClick = (event) => {
        setPage(event.selected + 1);
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    };

    return (
        <ReactPaginate className={styles.paginate}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={styles.container}
            pageClassName={styles.page}
            pageLinkClassName={styles.link}
            previousClassName={styles.previous}
            nextClassName={styles.next}
            activeClassName={styles.active}
            breakClassName={styles.break}
            activeLinkClassName={styles.activeLink}
            disabledClassName={styles.disabled}
        />
    );
}