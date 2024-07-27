import { useSelector } from 'react-redux';
import { useModal } from '../../shared/hooks/useModal';
import { useGetCatsQuery } from '../../pages/CatalogPage/api/api';
import { CreateCatCard } from '../CreateCatCard/CreateCatCard';
import { Filter } from '../../feature/FilterCats/ui/Filter/Filter';
import { PaginatedItems } from '../../feature/Pagination/ui/PaginationItem/PaginationItem';

const countCatCart = 12

export const CatCatalog = () => {
    const [changeCreateModal, drawCreateModal] = useModal();

    const filterParams = useSelector(state => ({
        generate: state.filter.generate,
        sex: state.filter.sex,
        age: state.filter.age,
        shipment: state.filter.shipment,
        page: 1,
    }));

    const params =  Object.fromEntries(
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
        <>
            {drawCreateModal(
            <CreateCatCard changeCreateModal={changeCreateModal} />
        )}

        <Filter />
        {
                error
                    ? <div>Не найдено - FIX LATER</div>
                    : <PaginatedItems cats={cats} pageCount = {itemsPerPage}/>
            }
        
        </>
        
    )
}