import React, { useState } from 'react';
import styles from './Drawer.module.scss';
import { Stack } from '../../shared/ui/Stack/Stack';
import closeButton from '../../shared/assets/photo/close.png';
import { closeIcon } from '../../shared/assets/svg/closeIcon'
import { dataSelect } from '../../feature/FilterCats/lib/data';
import Checkbox from '../../shared/ui/Checkbox/Checkbox';
import { Button } from '../../shared/ui/Button/Button';

export const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
    const [checkedOptions, setCheckedOptions] = useState({
        optionsAge: dataSelect.optionsAge.reduce((acc, option) => ({ ...acc, [option.id]: false }), {}),
        optionsSex: dataSelect.optionsSex.reduce((acc, option) => ({ ...acc, [option.id]: false }), {}),
        optionsColor: dataSelect.optionsColor.reduce((acc, option) => ({ ...acc, [option.id]: false }), {}),
        optionsStatus: dataSelect.optionsStatus.reduce((acc, option) => ({ ...acc, [option.id]: false }), {}),
    });

    const handleCheckboxChange = (category, id, checked) => {
        setCheckedOptions((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [id]: checked,
            },
        }));
    };
    const handleListItemClick = (category, id) => {
        setCheckedOptions((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [id]: !prev[category][id],
            },
        }));
    };

    const renderOptions = (category, options) => {
        return options.map(option => (
            <li key={option.id} onClick={() => handleListItemClick(category, option.id)}>
                <Stack
                    className={styles.test}
                    direction="row"
                    gap="8">
                    <Checkbox
                        className={styles.checkbox}
                        nameField={option.value}
                        idInput={option.value}
                        checked={checkedOptions[category][option.id]}
                        onChange={(checked) => handleCheckboxChange(category, option.id, checked)}
                    />
                    <span>{option.value}</span>
                </Stack>
            </li>
        ));
    };

    return (
        <>
            {isDrawerOpen && <div className={styles.overlay} onClick={toggleDrawer}></div>}
            <form className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
                <Stack
                    justifyContent="justifyContent"
                    direction='column'
                    gap="16"
                    className={styles.drawerContent}>
                    <button type='button'
                        className={styles.closeButton}
                        src={closeButton}
                        onClick={toggleDrawer}
                    >
                        <span className='visually-hidden'>Закрыть</span>
                        { closeIcon() }
                    </button>

                    <h3>Возраст:</h3>
                    <ul>
                        {renderOptions('optionsAge', dataSelect.optionsAge)}
                    </ul>

                    <h3>Пол:</h3>
                    <ul>
                        {renderOptions('optionsSex', dataSelect.optionsSex)}
                    </ul>
                    <h3>Цвет:</h3>
                    <ul>
                        {renderOptions('optionsColor', dataSelect.optionsColor)}
                    </ul>
                    <h3>Статус:</h3>
                    <ul>
                        {renderOptions('optionsStatus', dataSelect.optionsStatus)}
                    </ul>

                </Stack>
                <Button type="reset" className={styles.secondary} variant="secondary" onClick={() => setCheckedOptions({
                    optionsAge: dataSelect.optionsAge.reduce((acc, option) => ({ ...acc, [option.id]: false }), {}),
                    optionsSex: dataSelect.optionsSex.reduce((acc, option) => ({ ...acc, [option.id]: false }), {}),
                    optionsColor: dataSelect.optionsColor.reduce((acc, option) => ({ ...acc, [option.id]: false }), {}),
                    optionsStatus: dataSelect.optionsStatus.reduce((acc, option) => ({ ...acc, [option.id]: false }), {}),
                })}>
                    сбросить
                </Button>
            </form>
        </>
    );
};