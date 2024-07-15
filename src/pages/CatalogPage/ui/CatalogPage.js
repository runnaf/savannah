import styles from './CatalogPage.module.scss';
import { FilterCats } from '../../../feature/FilterCats/ui/FilterCats/FilterCats';
import React from 'react';
import { ScrollToTop } from '../../../shared/hooks/scrollToTop';
import { useGetCatsQuery } from "../api/api";
import { Button } from '../../../shared/ui/Button/Button';
import { useModal } from '../../../shared/hooks/useModal';
import { CreateCatCard } from '../../../widgets/CreateCatCard/CreateCatCard';
import { EditCatCard } from '../../../widgets/EditCatCard/EditCatCard';


export const CatalogPage = () => {
    ScrollToTop();
    const [changeCreateCatModal, drawCreateCatModal] = useModal();
    const [changeEditCatModal, drawEditCatModal] = useModal();

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

    return (
        <main className={styles.main}>
            {drawCreateCatModal(
                <CreateCatCard changeCreateModal={changeCreateCatModal} />
            )}
            {drawEditCatModal(
                <EditCatCard changeEditModal={changeEditCatModal} />
            )}

            <FilterCats />
            <Button
                variant='secondary'
                onClick={changeCreateCatModal}
            >
                Создать
            </Button>
            <Button onClick={changeEditCatModal}>
                Редактировать
            </Button>
        </main>
    );
};
