import styles from './CatalogPage.module.scss';
import SelectTwo from "../../shared/ui/SelectTwo/SelectTwo";

const OptionsOne = [
    { id: 1, value: 'коты и кошки' },
    { id: 2, value: 'котята' }
  ];
  const OptionsTwo = [
  { id: 1, value: 'самец' },
  { id: 2, value: 'самка' }
  ];
   const OptionsThree = [
   { id: 1, value: 'Ф2' },
   { id: 2, value: 'Ф3' },
   { id: 3, value: 'Ф4' }
  ];
   const OptionsFour = [
   { id: 1, value: 'готов к отправке' },
   { id: 2, value: 'в процессе' }
   ];
  

export const CatalogPage = () => {

    return (
        <div>
        <div className={styles.selection}>
      <div className='select'>
      <SelectTwo title="Возраст" options={OptionsOne}/>
      </div>

      <div className='select'>
      <SelectTwo title="Пол" options={OptionsTwo}/>
      </div>

      <div className='select'>
      <SelectTwo title="Окрас" options={OptionsThree}/>
      </div>

      <div className='select'>
      <SelectTwo title="Статус" options={OptionsFour}/>
      </div>
      </div>

        </div>
    )
};
