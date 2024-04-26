GeneticSubgroups
import { GeneticSubgroup } from '../../shared/ui/GeneticSubgroup/GeneticSubgroup';
import { Section } from '../../shared/ui/Section/Section';

export const GeneticSubgroups = () => {
  return (
    <Section text={`ГЕНЕТИЧЕСКИЕ ПОДГРУППЫ <b>САВАНН</b>`}>
      <GeneticSubgroup title='F2' text='Второе гибридное поколение, в данном случае полученное от скрещивания саванны первого поколения с домашней кошкой. Гены сервала не превышают 30%.'/>
      <GeneticSubgroup title='F3' text='Третье гибридное поколение, полученное в результате скрещивания саванны второго поколения с домашней кошкой. Гены сервала не превышают 13%.'/>
      <GeneticSubgroup title='F4-F5' text='Четвертое и пятое гибридные поколения получены в результате скрещивания третьего поколения с домашней кошкой. Котята мало чем отличаются от обычных домашних кошек разве что леопардовым окрасом.'/>      
    </Section>
  )
};