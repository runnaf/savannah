import style from './Characteristics.module.scss';
import { Characteristic } from '../../shared/ui/Characteristic/Characteristic';
import { Section } from '../../shared/ui/Section/Section';

export const Characteristics = () => {
  return (
    <Section text={`ХАРАКТЕРИСТИКИ <b>САВАНН</b>`}>
      <Characteristic />
      <Characteristic />
      <Characteristic />      
    </Section>
  )
};