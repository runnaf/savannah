import useFilter from "../../../../shared/hooks/useFilter";
import { ListBox } from "../../../../shared/ui/ListBox/ListBox";
import { getFilterText } from "../../lib/data";

export const FilterItem = ({ filter, options }) => {
    const { selected, changeSelect } = useFilter();

    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={changeSelect}
            badge
        />
    )
}