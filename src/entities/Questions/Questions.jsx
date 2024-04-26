import { Question } from '../../shared/ui/Question/Question';
import { Section } from '../../shared/ui/Section/Section';
import style from './Questions.module.scss';

export const Questions = () => {
  return (
    <Section text={`ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ`}>
      <Question />
      <Question />
      <Question />
      <Question />      
    </Section>
  )
};