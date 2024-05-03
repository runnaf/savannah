import { arrowIcon } from '../../shared/assets/svg/arrowIcon';
import { deleteIcon } from '../../shared/assets/svg/deleteIcon';
import { Button } from '../../shared/ui/Button/Button';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <br />
      <br />
      <Button
        className={styles.buttonIcon}
      >
        в каталог {arrowIcon()}
      </Button>
      <br />
      <br />
      <Button
        className={styles.buttonIcon}
        variant='secondary'>
        удалить {deleteIcon()}
      </Button>
      <br />
      <br />
      <Button
        className={styles.buttonDefault}
        variant='secondary'>
        сбросить
      </Button>
    </div>
  )
};
