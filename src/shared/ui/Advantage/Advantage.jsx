import style from './Advantage.scss';

export const Advantage = ({img, alt, text}) => {
  return (
    <li>
        <img src={img} alt={alt} width='' height='' />
        <p>{text}</p>
    </li>
  )
};