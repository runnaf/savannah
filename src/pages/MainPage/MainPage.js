import AboutUs from '../../entities/AboutUs/AboutUs';
import AccordionComponent from '../../entities/AccordionComponent/ui/AccordionComponent';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.MainPage}>
      <AboutUs />
      <AccordionComponent />
    </main>
  )
};
