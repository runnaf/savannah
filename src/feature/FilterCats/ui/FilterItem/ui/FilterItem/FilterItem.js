import { useEffect, useState } from "react"
import { FilterItemDesktop } from "../../ui/FilterItemDesktop/FilterItemDesktop";
import { FilterItemMobile } from "../../ui/FilterItemMobile/FilterItemMobile";

const WIDTHMOBILE = 900;

export const FilterItem = ({select, options, onClosed, checked, setChecked}) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }, []);

    return (
        <>
            {
                width > WIDTHMOBILE ? <FilterItemDesktop select={select} options={options} onClosed = {onClosed} checked={checked} setChecked={setChecked} /> : <FilterItemMobile select={select} options={options}/>
            }
        </>
    )
}