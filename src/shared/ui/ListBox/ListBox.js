import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import styles from './ListBox.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import { arrowDownIcon, arrowUpIcon } from '../../assets/svg/listboxIcons';
import { memo } from 'react';

export const ListBox = memo((props) => {
    const { 
        filter, 
        options, 
        selected, 
        changeSelect,
        badge = false,
        checked,
        setChecked
    } = props;

    const handleOptionClick = (option, event) => {
        event.preventDefault();
        event.stopPropagation();
        changeSelect(option);
    };

    return (
        <Listbox
            className={styles.container}
            value={selected}
        >
            {({ open }) => (
                <>
                    <ListboxButton
                        className={`${styles.button} ${open ? styles.buttonOpen : ''}`}
                    >
                        <div className={styles.text}>
                            {filter}
                            {open ? arrowUpIcon() : arrowDownIcon()}
                        </div>
                        {
                            selected.length > 0 && badge
                                ? <div className={styles.badge}>
                                    {selected.length}
                                </div>
                                : <></>
                        }
                    </ListboxButton>

                    <ListboxOptions className={styles.options} anchor="bottom">
                        {options.map(option => (
                            <ListboxOption
                                key={option}
                                value={option}
                                className={styles.option}
                                onClick={(e) => handleOptionClick(option, e)}
                            >
                                <Checkbox
                                    nameField={option}
                                    idInput={option}
                                    checked={checked ? selected.includes(option) : false}
                                    setChecked = {setChecked}
                                />
                                {option}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </>
            )}
        </Listbox>
    );
});