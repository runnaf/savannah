import styles from './CatalogPage.module.scss';
import { EditCatCard } from '../../../widgets/EditCatCard/EditCatCard';
import { CreateCatCard } from '../../../widgets/CreateCatCard/CreateCatCard';
import { Button } from '../../../shared/ui/Button/Button';
import { useModal } from '../../../shared/hooks/useModal';
import { ScrollToTop } from '../../../shared/hooks/scrollToTop';
import { Filter } from '../../../feature/FilterCats/ui/Filter/Filter';


export const CatalogPage = () => {

    ScrollToTop()
    const [changeCreateModal, drawCreateModal] = useModal();
    const [changeEditModal, drawEditModal] = useModal();

    // const filterParams = useSelector(state => ({
    //     generate: state.filter.generate,
    //     sex: state.filter.sex,
    //     age: state.filter.age,
    //     shipment: state.filter.shipment,
    // }))
    // console.log(filterParams)
    // const params = useMemo(()=>Object.fromEntries(
    //     Object.entries(filterParams)
    //         .map(([k, v]) => [k, v?.join(',')])
    // ), [filterParams])


 
    return (
        <main className={styles.main}>
            {drawCreateModal(
                <CreateCatCard changeCreateModal={changeCreateModal} />
            )}

            {drawEditModal(
                <EditCatCard changeEditModal={changeEditModal} />
            )}

            <Filter />
          
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
