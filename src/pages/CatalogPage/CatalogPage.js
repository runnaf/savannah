import styles from './CatalogPage.module.scss';
import { EditCatCard } from '../../widgets/EditCatCard/EditCatCard';
import { CreateCatCard } from '../../widgets/CreateCatCard/CreateCatCard';
import { FilterCats } from '../../feature/FilterCats/FilterCats';
import { Button } from '../../shared/ui/Button/Button';
import { useModal } from '../../shared/hooks/useModal';

export const CatalogPage = () => {

    const [changeCreateModal, drawCreateModal] = useModal();
    const [changeEditModal, drawEditModal] = useModal();

    return (
        <main className={styles.main}>
            {drawCreateModal(
                <CreateCatCard changeCreateModal={changeCreateModal} />
            )}

            {drawEditModal(
                <EditCatCard changeEditModal={changeEditModal} />
            )}

            <FilterCats />

            {/* TEST */}
            <br />
            <br />
            <Button onClick={changeCreateModal}>
                создать
            </Button>
            <br />
            <br />
            <Button onClick={changeEditModal}>
                редактировать
            </Button>
        </main>

    )
};
