import { useSelector } from 'react-redux';
import { useGetCatsQuery } from '../api/api';
import { Filter } from '../../../feature/FilterCats/ui/Filter/Filter';
import { PaginatedItems } from '../../../feature/Pagination/ui/PaginationItem/PaginationItem';
import { useModal } from '../../../shared/hooks/useModal';
import { CreateCatCard } from '../../../widgets/CreateCatCard/CreateCatCard';
import { HeaderSection } from '../../../shared/ui/HeaderSection/HeaderSection';
import { Text } from '../../../shared/ui/Text/Text';
import styles from './CatalogPage.module.scss';
import { Button } from '../../../shared/ui/Button/Button';

const countCatCart = 12

export const CatalogPage = () => {
    const [changeCreateModal, drawCreateModal] = useModal();

    const filterParams = useSelector(state => ({
        generate: state.filter.generate,
        sex: state.filter.sex,
        age: state.filter.age,
        shipment: state.filter.shipment,
        page: 1,
    }));

    const params = Object.fromEntries(
        Object.entries(filterParams).map(([key, value]) => {
            if (Array.isArray(value)) {
                return [key, value.join(',')];
            }
            return [key, value];
        })
    );

    const {
        data: { cats, totalCount } = {},
        error,
        isLoading
    } = useGetCatsQuery(params);

    let itemsPerPage = Math.ceil(totalCount / countCatCart);

    return (
        <main className={styles.main}>
            {drawCreateModal(
                <CreateCatCard changeCreateModal={changeCreateModal} />
            )}

            <HeaderSection section="Продаются котята">
                <Text tag="h2" size='xl' className={styles.title}>
                    Котята <span>готовые стать</span> частью семьи
                </Text>
            </HeaderSection>

            <Filter />
            {
                error
                    ? <div>Не найдено - FIX LATER</div>
                    : <PaginatedItems cats={cats} pageCount={itemsPerPage} />
            }

            <Button onClick={changeCreateModal}>создать</Button>
        </main>
    )
}
