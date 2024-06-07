// import styles from './CatalogPage.module.scss';
import { EditCatCard } from '../../widgets/EditCatCard/EditCatCard';
import { CreateCatCard } from '../../widgets/CreateCatCard/CreateCatCard';
import { FilterCats } from '../../feature/FilterCats/ui/FilterCats';


export const CatalogPage = () => {

    return (
        <div>
            <FilterCats/>
            <CreateCatCard/>
            <EditCatCard/>
        </div>

    )
};
