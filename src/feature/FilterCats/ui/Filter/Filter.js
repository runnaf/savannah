import { useCallback, useState } from 'react';
import { FilterBar } from '../FilterBar/FilterBar';
import styles from './Filter.module.scss';
import { FilterDrawer } from '../FilterDrawer/FilterDrawer';
import { Drawer } from '../../../../shared/ui/Drawer/Drawer';
import { filterOpen } from '../../../../shared/assets/svg/filterOpen'

export const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        setIsOpen(isOpen => !isOpen)
    }, []);

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