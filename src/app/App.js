// import { Navbar } from '../widgets/Navbar/Navbar';
// import { RouterProvider } from './providers/router/RouterProvider/RouterProvider';
import './styles/index.scss'
import { Button } from '../shared/ui/Button/Button';
import { Input } from '../shared/ui/Input/Input';
import SelectDrop from '../shared/ui/Select/Select';
import SelectTwo from '../shared/ui/SelectTwo/SelectTwo';

const OptionsOne = [
  { id: 1, value: 'коты и кошки' },
  { id: 2, value: 'котята' },
  { id: 3, value: 'показать все' }
];
const OptionsTwo = [
{ id: 1, value: 'самец' },
{ id: 2, value: 'самка' },
{ id: 3, value: 'показать все' }
];
 const OptionsThree = [
 { id: 1, value: 'Ф2' },
 { id: 2, value: 'Ф3' },
 { id: 3, value: 'Ф4' },
 { id: 4, value: 'показать все' }
];
 const OptionsFour = [
 { id: 1, value: 'готов к отправке' },
 { id: 2, value: 'в процессе' },
 { id: 3, value: 'показать все' }
 ];


function App() {
  return (
    <div>

      <Button text='Войти'/>
      <Input placeholder = 'логин'/>
      <div className='selection'>
      <div>
      <SelectDrop title="Возраст" options={OptionsOne} />
      </div>
      <div>
      <SelectDrop  title="Пол" options={OptionsTwo} />
      </div>
      <div>
      <SelectDrop title="Окрас" options={OptionsThree} />
      </div>
      <div>
      <SelectDrop title="Статус" options={OptionsFour} />
      </div>
      </div>

<div className='selection'>
      <div className='select selectTwo'>
      <SelectTwo title="Возраст" options={OptionsOne}/>
      </div>

      <div className='select selectTwo'>
      <SelectTwo title="Пол" options={OptionsTwo}/>
      </div>

      <div className='select selectTwo'>
      <SelectTwo title="Окрас" options={OptionsThree}/>
      </div>

      <div className='select selectTwo'>
      <SelectTwo title="Статус" options={OptionsFour}/>
      </div>
      </div>

    </div>
  );
}

export default App;
