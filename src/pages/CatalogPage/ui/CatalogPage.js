import { useModal } from '../../../shared/hooks/useModal';
import styles from './CatalogPage.module.scss';
import { Button } from '../../../shared/ui/Button/Button';
import { CatCatalog } from '../../../widgets/CatCatalog/CatCatalog';

export const CatalogPage = () => {
    const [changeCreateModal] = useModal();

    return (
        <main className={styles.main}>
            <CatCatalog />
            <Button onClick={changeCreateModal}>создать</Button>
        </main>
    )
}
