import AboutUs from "../../entities/AboutUs/ui/AboutUs";
import { BreedCharacteristics } from "../../entities/BreedCharacteristics/ui/BreedCharacteristics/BreedCharacteristics";
import AccordionComponent from "../../entities/AccordionComponent/ui/AccordionComponent";
import { Advices } from "../../entities/AdvicesComponent/ui/Advices/Advices";
import styles from "./MainPage.module.scss";
import OurKittens from "../../entities/Kittens/ui/OurKittens/OurKittens";
import Characteristics from "../../entities/CharacteristicsComponent/ui/Characteristics";
import Benefits from '../../entities/Benefits/ui/Benefits';
import { Gallery } from '../../entities/Gallery/ui/Gallery';
import GallerySlider from "../../entities/Gallery/GallerySlider/GallerySlider";
import { ScrollToTop } from "../../shared/hooks/scrollToTop";

export const MainPage = () => {
  ScrollToTop()
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <AboutUs />
        <Benefits />
        <OurKittens />
        <Characteristics />
        <BreedCharacteristics />
        <Advices />
        <AccordionComponent />
        <Gallery />
        <GallerySlider />
      </div>
    </main>
  )
};
