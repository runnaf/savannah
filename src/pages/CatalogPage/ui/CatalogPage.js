
import styles from './CatalogPage.module.scss';

import { CatCatalog } from '../../../widgets/CatCatalog/CatCatalog';

import { ScrollToTop } from '../../../shared/hooks/scrollToTop';

import AddNewCatCard from '../../../feature/AddNewCatCard/AddNewCatCard';

export const CatalogPage = () => {

    ScrollToTop()
    return (
        <main className={styles.main}>
            <AddNewCatCard/>
            <CatCatalog />
           
        </main>
    )
}
