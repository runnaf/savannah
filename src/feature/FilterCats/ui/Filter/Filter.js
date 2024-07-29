import { useCallback, useMemo, useState } from 'react';
import { FilterBar } from '../FilterBar/FilterBar';
import styles from './Filter.module.scss';
import { FilterDrawer } from '../FilterDrawer/FilterDrawer';
import { Drawer } from '../../../../shared/ui/Drawer/Drawer';
import { filterOpen } from '../../../../shared/assets/svg/filterOpen'
import { useSelector } from 'react-redux';
import { Badge } from '../../../../shared/ui/Badge/Badge';

export const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = useCallback(() => {
        setIsOpen(isOpen => !isOpen)
    }, []);
    console.log(isOpen)
    const filterParams = useSelector(state => ({
        generate: state.filter.generate,
        sex: state.filter.sex,
        age: state.filter.age,
        shipment: state.filter.shipment,
    }));

    const selected = useMemo(() => {
        let arrays = []
        for (const [key, value] of Object.entries(filterParams)) {
            if (value.length > 0) {
                value.forEach(item => arrays.push(item))
            }
        }
        
        return arrays.length;
    }   ) 

    return (
        <div className={styles.container}>
            <div className={styles.filterDesktop}>
                <FilterBar />
            </div>
            <div className={styles.filterMobile}>
                <button
                    className={styles.button}
                    onClick={toggleDrawer}
                >
                    <span className='visually-hidden'>Открыть</span>
                    { filterOpen() }
                    { }
                    {selected? <Badge className={styles.selectedContainer} count = {selected} /> : ''}
                </button>
                <Drawer
                    close={toggleDrawer}
                    isOpen = {isOpen}
                >
                    <FilterDrawer />
                </Drawer>
            </div>
        </div>
    );
}