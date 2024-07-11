import { openButton } from "../../../../shared/assets/svg/openButton";
import { useModal } from "../../../../shared/hooks/useModal";
import { Button } from "../../../../shared/ui/Button/Button";
import { Text } from "../../../../shared/ui/Text/Text";
import { FilterList } from "../FilterList/FilterList";
import styles from "./FilterCatsMobile.module.scss"

export const FilterCatsMobile = () => {
    const [changeFilterModal, drawFilterModal] = useModal();
    return (
        <>
            {
                drawFilterModal(
                    <div className={styles.container}>
                        <button type='button' className={styles.buttonClosed} onClick={changeFilterModal}>
                            <span className="visually-hidden">Закрыть</span>
                        </button>
                        <Text type="h2" className={styles.title}>Фильтры</Text>
                        <form>
                            <FilterList />
                            <div className={styles.buttonContainer}>
                                <Button type="reset" className={styles.secondary} variant="secondary">
                                    сбросить
                                </Button>
                                <Button type="submit" className={styles.secondary} variant="secondary">
                                    применить
                                </Button>
                            </div>
                        </form>
                    </div>
                )
            }
            <button className={styles.buttonOpen} type="button" onClick={changeFilterModal}>
                <span className='visually-hidden'>Открыть фильтрацию</span>
                {openButton()}
            </button>
        </>
    )
}