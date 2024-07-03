import styles from './CatalogPage.module.scss';
import { EditCatCard } from '../../widgets/EditCatCard/EditCatCard';
import { CreateCatCard } from '../../widgets/CreateCatCard/CreateCatCard';
import { FilterCats } from '../../feature/FilterCats/ui/FilterCats/FilterCats';
import { Button } from '../../shared/ui/Button/Button';
import { useModal } from '../../shared/hooks/useModal';
import picAdjustm from '../../shared/assets/photo/picAdjustm.png';
import adjustmIcon from '../../shared/assets/photo/adjustmIcon.png';
import { Stack } from '../../shared/ui/Stack/Stack';
import picAdjustMore from '../../shared/assets/photo/picAdjustMore3.png';
import { Drawer } from '../../widgets/Drawer/Drawer';
import React, { useState } from 'react';
import { ScrollToTop } from '../../shared/hooks/scrollToTop';


export const CatalogPage = () => {

    ScrollToTop()
    const [changeCreateModal, drawCreateModal] = useModal();
    const [changeEditModal, drawEditModal] = useModal();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };


    return (
        <main className={styles.main}>

            <div className={styles.btnAdj}>
                <Stack
                    justifyContent="justifyContent">
                    <button
                        className={styles.adjustm}
                        type="button"
                    // onClick={}
                    >
                        <img className={styles.picAdjustm} src={picAdjustm} alt="выбор картинок" />
                        <span className='visually-hidden'>Выбрать картинки</span>
                    </button>

                    <button
                        className={styles.adjustm}
                        type="button"
                    // onClick={}
                    >
                        <img className={styles.picAdjustM} src={picAdjustMore} alt="выбор картинок" />
                        <span className='visually-hidden'>Выбрать картинки</span>
                    </button>
                </Stack>


                <button
                    className={styles.adjustm}
                    type="button"
                    onClick={toggleDrawer}
                >
                    <img className={styles.adjustmIcon} src={adjustmIcon} alt="выбор категории" />
                    <span className='visually-hidden'>Выбрать категории</span>
                </button>
            </div>



            {drawCreateModal(
                <CreateCatCard changeCreateModal={changeCreateModal} />
            )}

            {drawEditModal(
                <EditCatCard changeEditModal={changeEditModal} />
            )}

            <FilterCats />
            <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>


            {/* TEST */}
            <br />
            <br />
            <Button onClick={changeCreateModal}>
                создать
            </Button>
            <br />
            <br />
            <Button onClick={changeEditModal}>
                редактировать
            </Button>
        </main>

    )
};
