import styles from "./FilterButton.module.scss"

export const FilterButton = ({select, open, handleButtonClick}) => {
    return (
        <button className={`${styles.filterButton}${open ? ` ${styles.open}` : ''}`} type="button" onClick={handleButtonClick}>{select}</button>
    )
}