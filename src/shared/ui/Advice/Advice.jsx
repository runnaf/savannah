import style from './Advice.scss';

export const Advice = ({img, alt, title, text}) => {
  return (
    <li>
        <img src={img} alt={alt} width='' height='' />
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </li>
  )
};