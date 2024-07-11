import { useRef, useState } from "react";
import Checkbox from "../../../../../../shared/ui/Checkbox/Checkbox";
import useOutsideClick from "../../../../../../shared/hooks/useOutsideClick";
import { FilterButton } from "../FilterButton/FilterButton";
import styles from "./FilterItemDesktop.module.scss";



export const FilterItemDesktop = ({select, options, checked, setChecked }) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(checked);
    console.log(checked, check)

    const onChange = (e) => {
        const checkedField = e.target.checked;
        console.log(checked, check)
        
        if (checkedField && check >= 0) {
            setCheck(check+1);
            setChecked(checked+1);
            
        } else if (!checkedField && check !== 0) {
            setCheck(check-1);
            setChecked(checked-1)
        }
        
    }
    useOutsideClick(ref, open, setOpen);
    
    return (
        <li ref={ref} id={select} className={`${styles.container} ${open ? ` ${styles.open}` : ''}`}>
            <FilterButton select={select} open={open} handleButtonClick={()=>setOpen(!open)}/>
            <ul className={styles.list}>
                        {options.map((option) => (
                        <li className={styles.item} key={option}>
                            <Checkbox nameField={option} onChange={onChange} />
                        </li>
                        ))}
                    </ul>
                    <div className={`${styles.quantity}${checked >= 0 && check === 0 ? ` ${styles.hidden}` : ''}`}>
                        <span className="visually-hidden">Количество выбранных чекбоксов в данной категории</span>
                        <span>{checked === 0 ? 0 : check }</span>
                    </div>
        </li>
    )
}
