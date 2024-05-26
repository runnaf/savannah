import AboutUs from '../../entities/AboutUs/AboutUs';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.MainPage}>
      <AboutUs />
    </main>
  )
};
