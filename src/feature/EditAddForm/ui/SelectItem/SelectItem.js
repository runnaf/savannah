import { useCallback, useState } from 'react';
import { filters } from '../../../FilterCats/lib/data';
import { ListBox } from '../../../../shared/ui/ListBox/ListBox';

export const SelectItem = (props) => {
    const { filter, options } = props;

    const [selected, setSelected] = useState('');

    const changeSelect = useCallback((option) => {
        setSelected(option)
    }, []);

    const getFilterText = (filter) => {
        return filters[filter]
    };

    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={changeSelect}
        />
    )
}
