import styles from './CatalogPage.module.scss';
import { FilterCats } from '../../../feature/FilterCats/ui/FilterCats/FilterCats';
import React from 'react';
import { ScrollToTop } from '../../../shared/hooks/scrollToTop';
import { useGetCatsQuery } from "../api/api";


export const CatalogPage = () => {
    ScrollToTop();

    const filterParams = {
        group: [],
        sex: ['самка'],
        age: ['котята'],
        shipment: []
    }; //TEST - из REDUX потом брать 

    const params = {
        generate: filterParams.group?.join(','),
        sex: filterParams.sex?.join(','),
        age: filterParams.age?.join(','),
        shipment: filterParams.shipment?.join(',')
    };

    const { data: cats, error, isLoading } = useGetCatsQuery(params);
    console.log(cats);

    return (
        <main className={styles.main}>
            <FilterCats />
        </main>
    );
};
