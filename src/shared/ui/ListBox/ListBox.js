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
        badge = false 
    } = props;

    const handleOptionClick = (option, event) => {
        event.preventDefault();
        event.stopPropagation();
        changeSelect(option);
    };

    return (
        <Listbox
            value={selected}
        >
            {({ open }) => (
                <>
                    <ListboxButton
                        className={styles.button}
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
                                    checked={selected.includes(option)}
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