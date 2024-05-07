import style from './TurningButton.scss';

export const TurningButton = ({ right, disabled }) => {
    function getPage () {

    }
  return (
    <button type='button' className={`${style.button} ${right ? style.button_right : ''}`} onClick={getPage} disabled={disabled}>
      <span className='vissualy-hidden'>`${right ? 'листать в право' : 'листать в лево'}`</span>
      <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 3L7 13L28 22" stroke="#7A5452" stroke-width="5"/>
      </svg>
    </button>
  )
};
