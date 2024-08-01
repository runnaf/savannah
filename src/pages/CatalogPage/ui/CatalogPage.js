import { useModal } from '../../../shared/hooks/useModal';
import styles from './CatalogPage.module.scss';
import { Button } from '../../../shared/ui/Button/Button';
import { CatCatalog } from '../../../widgets/CatCatalog/CatCatalog';
import { Text } from '../../../shared/ui/Text/Text';
import { ScrollToTop } from '../../../shared/hooks/scrollToTop';
import { CreateCatCard } from '../../../widgets/CreateCatCard/CreateCatCard';

export const CatalogPage = () => {
    const [changeCreateModal, drawCreateModal] = useModal();
    ScrollToTop()
    return (
        <main className={styles.main}>
              {drawCreateModal(
                <CreateCatCard changeCreateModal={changeCreateModal} />
            )}
            <Text className='visually-hidden' type="h1">Каталог Котят</Text>
            <div className={styles.titleContainer}>
                <Text className={styles.titleFist} type='p'>Продаются котята</Text>
                <Text className={styles.titleSecond} type='h2'>Котята <span>готовые стать</span> частью семьи</Text>
            </div>
            <CatCatalog />
            <Button onClick={changeCreateModal}>создать</Button>
        </main>
    )
}
