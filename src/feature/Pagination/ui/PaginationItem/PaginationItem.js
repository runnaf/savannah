import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './PaginationItems.module.scss'
import { useDispatch } from 'react-redux';
import { getPage } from '../../model/slices/slice';

export function PaginatedItems({ pageCount }) {
    const dispatch = useDispatch();

    const handlePageClick = (event) => {
        dispatch(getPage(event.selected))
        console.log(
        `User requested page number ${event.selected}`
        );
    };

    return (
            <div className={styles.wrapper}>
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
                    activeLinkClassName={styles.activeLink}
                    disabledClassName={styles.disabled}
                />
            </div>
    );
}