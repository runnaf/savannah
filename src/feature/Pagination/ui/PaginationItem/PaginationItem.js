import React from 'react';
import ReactPaginate from 'react-paginate';
import { CatItems } from '../CatItems/CatItems';
import styles from './PaginationItems.module.scss'

export function PaginatedItems({ cats, pageCount }) {


    const handlePageClick = (event) => {
        console.log(
        `User requested page number ${event.selected}`
        );
    };

    return (
        <>
            <CatItems cats={cats} />
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
        </>
    );
}