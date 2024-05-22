import AboutUs from '../../entities/AboutUs/AboutUs';
import { Header } from '../../widgets/Header/Header';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
<div>
    <div className={styles.MainPage}>
      <Header />
      <AboutUs />
    </div>

    </div>
  )
};
