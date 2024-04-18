import { Button } from '../../shared/ui/Button/Button';
import style from './Information.module.scss';

export const Information = () => {
  return (
    <section>
        <h2 className='visaully-hidden'>Где еще узнать о нас</h2>
        <p>Больше о нас и повседневной жизни наших саванн можно увидеть здесь</p>
        <Button />
        <ul>
            <li>
                <img/>
            </li>
        </ul>
    </section>
  )
};