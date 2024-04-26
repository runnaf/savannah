import { Section } from '../../shared/ui/Section/Section';
import style from './Advantages.scss';

export const Advantages = () => {
  return (
    <Section text={`ПИТОМНИК <b>SAVANNAH WORLD</b> ЭТО - `}>
      <Advantages text='Документация согласно стандартам породы'/>
        <Advantages text='Полное ветеринарное обследование и вакцинация'/>
        <Advantages text='Консультация по вопросам содержания и воспитания'/>
    </Section>
  )
};