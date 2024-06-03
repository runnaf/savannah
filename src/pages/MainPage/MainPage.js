import AboutUs from '../../entities/AboutUs/AboutUs';
import { BreedCharacteristics } from '../../entities/BreedCharacteristics/ui/BreedCharacteristics/BreedCharacteristics';
import OurKittens from '../../entities/OurKittens/ui/OurKittensList/OurKittens';
import AccordionComponent from '../../entities/AccordionComponent/ui/AccordionComponent';
import styles from './MainPage.module.scss';
import Characteristics from '../../entities/Characteristics/Characteristics';

export const MainPage = () => {
  return (
    <main className={styles.MainPage}>
      <AboutUs />
      <OurKittens/>
      <BreedCharacteristics />
      <Characteristics/>
      <AccordionComponent />
    </main>
  )
};
