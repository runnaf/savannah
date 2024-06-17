import styles from "../ui/Footer.module.scss";
import phoneIcon from "../../../shared/assets/footer/phone.png";
import envelopeIcon from "../../../shared/assets/footer/mail.png";
import placemarkerIcon from "../../../shared/assets/footer/placemarker.png";
import telegramIcon from "../../../shared/assets/footer/telegram.png";
import instaIcon from "../../../shared/assets/footer/insta.png";
import vkIcon from "../../../shared/assets/footer/vk.png";


export const leftSectionData = [
    {
        id: 1,
        icon: phoneIcon,
        alt: 'телефон',
        hiddenText: 'номер телефона',
        content: '+999 888-77-66'
    },
    {
        id: 2,
        icon: envelopeIcon,
        alt: 'эмейл',
        hiddenText: 'эмейл',
        content: <a className={styles.email} target='_blank' rel="noreferrer" href="mailto:savannahworld@gmail.com">savannahworld@gmail.com</a>
    },
    {
        id: 3,
        icon: placemarkerIcon,
        alt: 'адрес',
        hiddenText: 'адрес',
        content: 'г.Москва, ул.Отрадная, дом 1'
    }
];

export const rightSectionData =[
    {
        id: 1,
        icon: telegramIcon,
        alt: 'телеграм',
        hiddenText: 'телеграм',
        content: <a className={styles.email} target='_blank' rel="noreferrer" href="https://t.me/savannahworld">@savannahworld</a>
    },
    {
        id: 2,
        icon: instaIcon,
        alt: 'инстаграм',
        hiddenText: 'инстаграм',
        content: <a className={styles.email} target='_blank' rel="noreferrer" href="https://instagram.com/savannahworld">@savannahworld</a>
    },
    {
        id: 3,
        icon: vkIcon,
        alt: 'вконтакте',
        hiddenText: 'вконтакте',
        content: <a className={styles.email} target='_blank' rel="noreferrer" href="https://vk.com/savannahworld">@savannahworld</a>
    }
]