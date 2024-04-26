import style from './Characteristic.module.scss';
import { Button } from '../../shared/ui/Button/Button';

export const Characteristic = ({children}) => {
  return (
    <li className={style.item}>
        {children}
    </li>
  )
};