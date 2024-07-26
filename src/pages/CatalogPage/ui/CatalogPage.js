import styles from './CatalogPage.module.scss';
import { Button } from '../../../shared/ui/Button/Button';
import { useModal } from '../../../shared/hooks/useModal';
import { ScrollToTop } from '../../../shared/hooks/scrollToTop';
import { CatCatalog } from '../../../widgets/CatCatalog/CatCatalog';


export const CatalogPage = () => {

    ScrollToTop()
    const [changeCreateModal, drawCreateModal] = useModal();
    const [changeEditModal, drawEditModal] = useModal();

    return (
        <main className={styles.main}>
            <CatCatalog />
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
