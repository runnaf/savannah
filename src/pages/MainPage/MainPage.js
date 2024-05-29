import AboutUs from '../../entities/AboutUs/AboutUs';
import OurKittens from '../../widgets/OurKittens/OurKittens';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.MainPage}>
      <AboutUs />
      <OurKittens/>
    </main>
  )
};
