import styles from './CatalogPage.module.scss';
import { FilterCats } from '../../../feature/FilterCats/ui/FilterCats/FilterCats';
import React from 'react';
import { ScrollToTop } from '../../../shared/hooks/scrollToTop';
import { useGetCatsQuery } from "../api/api";


export const CatalogPage = () => {

    ScrollToTop();
    const { data: cats, error, isLoading } = useGetCatsQuery({});

    return (
        <main className={styles.main}>
            <FilterCats />
        </main>
    );
};
