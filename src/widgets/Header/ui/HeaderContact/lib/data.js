import { telephoneIcon, telegramIcon, mailIcon, instagramIcon, vkIcon } from "../../../../../shared/assets/svg/headerContactIcon";

const COLOR = '#fff';
export const contacts = [
    {
        id: 1,
        img: telephoneIcon(COLOR),
        alt: 'телефон',
        href: 'tel:+9998887766',
        text: '+999 888-77-66'
    },
    {
        id: 2,
        img: mailIcon(COLOR),
        alt: 'эмейл',
        href: 'mailto:savannahworld@gmail.com',
        text: 'savannahworld@gmail.com'
    }
];

export const mediaData = [
    {
        id: 1,
        img: telegramIcon(COLOR),
        alt: 'телеграм',
        href: 'https://t.me/savannahworld',
    },
    {
        id: 2,
        img: instagramIcon(COLOR),
        alt: 'инстаграм',
        href: 'https://instagram.com/savannahworld',
    },
    {
        id: 3,
        img: vkIcon(COLOR),
        alt: 'вконтакте',
        href: 'https://vk.com/savannahworld',
    }
];
