import { Advice } from '../../shared/ui/Advice/Advice';
import { Section } from '../../shared/ui/Section/Section';
import style from './Advice.scss';

export const Advices = () => {
  return (
    <Section text={`СОВЕТЫ НОВЫМ ВЛАДЕЛЬЦАМ <b>САВАНН</b>`}>
      <Advice title='ОБЕСПЕЧЬТЕ ДОСТАТОЧНО ПРОСТРАНСТВА'/>
      <Advice title='ЗАБОТЬТЕСЬ О ЗДОРОВЬЕ'/>
      <Advice title='ПИТАНИЕ'/>
      <Advice title='ВОСПИТАНИЕ И ОБУЧЕНИЕ'/>
      <Advice title='ВНИМАНИЕ И ПРИВЯЗАННОСТЬ'/>
    </Section>
  )
};