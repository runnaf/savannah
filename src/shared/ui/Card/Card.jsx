import style from './Card.scss';
import { Button } from '../../shared/ui/Button/Button';

export const Card = ({img, alt, children}) => {
  return (
    <li>
        <img src={img} alt={alt} width='' height='' />
        <div>{children}</div>
        <Button />
    </li>
  )
};