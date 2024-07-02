import { documentIcon, consultationIcon, veterinaryIcon } from '../../../shared/assets/svg/benefitIcons';



const benefitsData = [
    {
        id: 1,
        img: documentIcon(),
        benefit:' Документация согласно стандартам породы',       
    },
    {
        id: 2,
        img: consultationIcon(),
        benefit:' Полное ветеринарное обследование и вакцинация',
    },
    {
        id: 3,
        img: veterinaryIcon(),
        benefit:'Консультация по вопросам содержания и воспитания',
    },
]
export default benefitsData;