import AboutUs from '../../entities/AboutUs/AboutUs';
import { Header } from '../../widgets/Header/Header';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <h1>PageMaine</h1>
      <Header />
      <AboutUs />
    </div>
  )
};
