
  export const dataSelect = {
    optionsAge:  [
      { id: 1, value: 'коты и кошки' },
      { id: 2, value: 'котята' }
    ],
    optionsSex: [
      { id: 1, value: 'самец' },
      { id: 2, value: 'самка' }
      ],
    optionsColor: [
        { id: 1, value: 'Ф2' },
        { id: 2, value: 'Ф3' },
        { id: 3, value: 'Ф4' }
      ],
      optionsStatus: [
        { id: 1, value: 'готов к отправке' },
        { id: 2, value: 'в процессе' }
        ]
} //ЗАМЕНИТЬ В DRAWER НА dataFilter И ПОТОМ УДАЛИТЬ

export const dataFilter = {
  group: ['Ф2', 'Ф3', 'Ф4'],
  sex: ['самец', 'самка'],
  age: ['взрослые', 'котята'],
  shipment: ['готов к отправке', 'в процессе']
};

export const filters = {
  group: 'группа',
  sex: 'пол',
  age: 'возраст',
  shipment: 'статус',
}

export const DATAFILTER = {
  'группа': ['Ф2', 'Ф3', 'Ф4'],
  'пол': ['самец', 'самка'],
  'возраст': ['взрослые', 'котята'],
  'статус': ['готов к отправке', 'в процессе'],
}
