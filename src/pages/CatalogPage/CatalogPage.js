import styles from './CatalogPage.module.scss';
import { FilterCats } from '../../feature/FilterCats/ui/FilterCats/FilterCats';
import React from 'react';
import { ScrollToTop } from '../../shared/hooks/scrollToTop';


export const CatalogPage = () => {

    ScrollToTop()

    return (
        <main className={styles.main}>
            <FilterCats />
        </main>

    )
};
