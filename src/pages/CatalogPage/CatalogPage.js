import styles from './CatalogPage.module.scss';
import Select from "../../shared/ui/Select/Select";
import { Edit } from '../../feature/Edit/Edit';

const OptionsAge = [
    { id: 1, value: 'коты и кошки' },
    { id: 2, value: 'котята' }
  ];
  const OptionsSex = [
  { id: 1, value: 'самец' },
  { id: 2, value: 'самка' }
  ];
   const OptionsColor = [
   { id: 1, value: 'Ф2' },
   { id: 2, value: 'Ф3' },
   { id: 3, value: 'Ф4' }
  ];
   const OptionsStatus = [
   { id: 1, value: 'готов к отправке' },
   { id: 2, value: 'в процессе' }
   ];
  

export const CatalogPage = () => {

    return (
        <div>
        <div className={styles.selection}>
      <div className='select'>
      <Select title="Возраст" options={OptionsAge}/>
      </div>

      <div className='select'>
      <Select title="Пол" options={OptionsSex}/>
      </div>

      <div className='select'>
      <Select title="Окрас" options={OptionsColor}/>
      </div>

      <div className='select'>
      <Select title="Статус" options={OptionsStatus}/>
      </div>
      </div>

      <div>
            <Edit/>
    </div>

        </div>
    )
};
