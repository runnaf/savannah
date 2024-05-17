// import styles from './CatalogPage.module.scss';
import { Edit } from '../../widgets/EditCatCard/Edit';
import { Add } from '../../widgets/CreateCatCard/Add';
import { FilterCats } from '../../feature/FilterCats/FilterCats';

export const CatalogPage = () => {

    return (
        <div>
    <FilterCats/>   
      <div>
    <Edit/>
    </div>
    <div>
    <Add/>
    </div>

        </div>
    )
};
