import {DATAFILTER} from "../../lib/data";
import { FilterItem } from "../FilterItem/ui/FilterItem/FilterItem";
import styles from "./FilterList.module.scss"

export const FilterList = ({checked, setChecked}) => {
    return (
        <ul className={styles.container}>
            { Object.entries(DATAFILTER).map(([select,options]) => (
                <FilterItem key={select} select={select} options={options} checked={checked} setChecked={setChecked}/>
            ))}
        </ul>
        
    )
}