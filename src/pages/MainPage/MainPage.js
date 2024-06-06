import AboutUs from '../../entities/AboutUs/ui/AboutUs';
import { BreedCharacteristics } from '../../entities/BreedCharacteristics/ui/BreedCharacteristics/BreedCharacteristics';
import AccordionComponent from '../../entities/AccordionComponent/ui/AccordionComponent';
import { Advices } from '../../entities/AdvicesComponent/ui/Advices/Advices'
import styles from './MainPage.module.scss';
import OurKittens from '../../feature/OurKittens/ui/OurKittens';

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <AboutUs />
      <OurKittens />
      <BreedCharacteristics />
      <Advices/>
      <AccordionComponent />
    </main>
  )
};
