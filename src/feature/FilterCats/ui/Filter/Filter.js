import { useCallback } from 'react';
import { FilterBar } from '../FilterBar/FilterBar';
import styles from './Filter.module.scss';
import { FilterDrawer } from '../FilterDrawer/FilterDrawer';
import { Drawer } from '../../../../shared/ui/Drawer/Drawer';
import { filterOpen } from '../../../../shared/assets/svg/filterOpen'
import { useDispatch, useSelector } from 'react-redux';
import { getState } from '../../model/slices/sliceIsOpen';

export const Filter = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.open.open)
    console.log(isOpen)
    const filterParams = useSelector(state => ({
        generate: state.filter.generate,
        sex: state.filter.sex,
        age: state.filter.age,
        shipment: state.filter.shipment,
    }));

    const toggleDrawer = useCallback(() => {
        dispatch(getState())
    }, []);

    const selected = () => {
        let arrays = []
        for (const [key, value] of Object.entries(filterParams)) {
            if (value.length > 0) {
                value.forEach(item => arrays.push(item))
            }
        }
        
        return arrays.length;
    }   

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
                    {selected()? <span className={styles.selectedContainer}>{selected()}</span>: ''}
                </button>
                <Drawer
                    isOpen={isOpen}
                    close={toggleDrawer}
                >
                    <FilterDrawer />
                </Drawer>
            </div>
        </div>
    );
}