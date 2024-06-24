import styles from "../ui/Footer.module.scss";
import phoneIcon from "../../../shared/assets/footer/phone.svg";
import envelopeIcon from "../../../shared/assets/footer/mail.svg";
import placemarkerIcon from "../../../shared/assets/footer/map.svg";
import telegramIcon from "../../../shared/assets/footer/telegram.svg";
import instaIcon from "../../../shared/assets/footer/instagram.svg";
import vkIcon from "../../../shared/assets/footer/vk.svg";


export const sectionData = [
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

export const mediaData =[
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