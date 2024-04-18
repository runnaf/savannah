import style from './Option.scss';

export const Option = ({ text }) => {
  return (
    <li class={style.option}>
      <input class="visually-hidden" type="checkbox" name="text" checked id="text" />
      <label class={style.label} for="text">{text}</label>
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 1L8 12.5L1 5" stroke="white" stroke-width="2"/>
      </svg>
    </li>
  )
};
