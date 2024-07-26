import { useCallback } from 'react';
import { getFilterText } from '../../lib/data';
import { ListBox } from '../../../../shared/ui/ListBox/ListBox';
import { setFilter } from '../../model/slices/slice';
import { useDispatch, useSelector } from 'react-redux';

export const FilterItem = ({ filter, options }) => {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.filter[filter]);

    const handleSelect = useCallback((option) => {
        dispatch(setFilter({ filter, option }))
    }, [dispatch, filter])

    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={handleSelect}
            badge
        />
    )
}
