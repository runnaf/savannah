import cat1 from '../../../shared/assets/photo/kitten1.png';
import cat2 from '../../../shared/assets/photo/kitten2.png';
import cat3 from '../../../shared/assets/photo/kitten3.png';

export const KittensMock = {
      _id: '',
    name_cat: '',
    generate: '',
    sex: '',
    age:'',
    shipment: '',
    image: '',
}
const kittensData = [
    {
        _id: 1,
        images: cat1,
        name_cat: 'имя 1',
        generate:'Ф2',
        sex: 'самка',
        age: 'котята',
        shipment: 'готов к отправке'
    },
    {
        _id: 2,
        images: cat2,
        name_cat: 'имя 2',
        generate:'Ф3',
        sex: 'самeц',
        age: 'котята',
        shipment: 'готов к отправке'
    },
    {
        _id: 3,
        images: cat3,
        name_cat: 'имя 3',
        generate:'Ф4',
        sex: 'самка',
        age: 'котята',
        shipment: 'готов к отправке'
    },
]
export default kittensData;