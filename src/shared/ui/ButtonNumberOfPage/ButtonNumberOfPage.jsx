import style from './ButtonNumberOfPage.scss';

export const ButtonNumberOfPage = ({ active, number }) => {
    function getPage () {

    }
  return (
    <li>
      <button type='button' className={`${style.button} ${active ? style.button_active : ''}`} onClick={getPage} disabled={active}>
        <span className='vissualy-hidden'>`${number} страница каталога`</span>
        <span>{ number }</span>
      </button>
    </li>    
  )
};