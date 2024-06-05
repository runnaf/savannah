import AboutUs from '../../entities/AboutUs/AboutUs';
import { BreedCharacteristics } from '../../entities/BreedCharacteristics/ui/BreedCharacteristics/BreedCharacteristics';

import AccordionComponent from '../../entities/AccordionComponent/ui/AccordionComponent';
import { Advices } from '../../entities/AdvicesComponent/ui/Advices/Advices'
import styles from './MainPage.module.scss';
import Characteristics from '../../entities/Characteristics/Characteristics';
import Kittens from '../../entities/OurKittens/ui/OurKittensItem/Kittens';

export const MainPage = () => {
  return (
    <main className={styles.MainPage}>
      <AboutUs />
      <Kittens/>
      <BreedCharacteristics />
      <Advices/>
      <Characteristics/>
      <AccordionComponent />
    </main>
  )
};
