import AboutUs from '../../entities/AboutUs/AboutUs';
import AccordionList from '../../entities/AccordionList/AccordionList';
import styles from './MainPage.module.scss';




export const MainPage = () => {
  return (
    <main className={styles.MainPage}>
      <AboutUs />
      <AccordionList/>
    </main>
  )
};
