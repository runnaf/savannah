import { useCallback, useState } from "react";
import { filters } from "../../lib/data";
import { ListBox } from "../../../../shared/ui/ListBox/ListBox";


export const FilterItem = (props) => {
    const { filter, options, checked, setChecked } = props;

    const [selected, setSelected] = useState([]);

    const changeSelect = useCallback((option) => {
        setSelected(
            selected.includes(option)
                ? selected.filter(item => item !== option)
                : [...selected, option]
        )
    }, [selected]);

    const getFilterText = (filter) => {
        return filters[filter]
    };

    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={changeSelect}
            checked={checked}
            setChecked={setChecked}
            badge
        />
    )
};