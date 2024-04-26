import { useState } from 'react';
import style from './Question.scss';

export const Question = ({detailes, text}) => {
    const [state, setState] = useState(false)
    const uncover = () => {

    }
  return (
    <li>
        <div>
            <p>{text}</p>
            <button type='button' onClick={uncover}>
                <span className='visually-hidden'>{state ? 'подробнее' : 'свернуть совет'}</span>
            </button>
        </div>
        <p>{detailes}</p>
    </li>
  )
};