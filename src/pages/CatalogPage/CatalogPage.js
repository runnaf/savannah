import styles from './CatalogPage.module.scss';
import { EditCatCard } from '../../widgets/EditCatCard/EditCatCard';
import { CreateCatCard } from '../../widgets/CreateCatCard/CreateCatCard';
import { FilterCats } from '../../feature/FilterCats/ui/FilterCats';
import { Button } from '../../shared/ui/Button/Button';
import { useModal } from '../../shared/hooks/useModal';
import picAdjustm from '../../shared/assets/photo/picAdjustm.png';
import adjustmIcon from '../../shared/assets/photo/adjustmIcon.png';
import { Stack } from '../../shared/ui/Stack/Stack';
import picAdjustMore from '../../shared/assets/photo/picAdjustMore3.png';


export const CatalogPage = () => {

    const [changeCreateModal, drawCreateModal] = useModal();
    const [changeEditModal, drawEditModal] = useModal();


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
                <img className={styles.picAdjustm} src={picAdjustm} alt="выбор картинок"/>
                <span className='visually-hidden'>Выбрать картинки</span>              
            </button>
            
            <button
                className={styles.adjustm}
                type="button"
                // onClick={}
            >
                <img className={styles.picAdjustM} src={picAdjustMore} alt="выбор картинок"/>
                <span className='visually-hidden'>Выбрать картинки</span>              
            </button>
            </Stack>


            <button
                className={styles.adjustm}
                type="button"
                // onClick={}
            >
                <img className={styles.adjustmIcon} src={adjustmIcon} alt="выбор категории"/>
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
