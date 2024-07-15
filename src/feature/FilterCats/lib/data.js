export const dataFilter = {
    generate: ['Ф2', 'Ф3', 'Ф4'],
    sex: ['самец', 'самка'],
    age: ['взрослые', 'котята'],
    shipment: ['готов к отправке', 'в процессе']
  };
  
  export const filters = {
    generate: 'группа',
    sex: 'пол',
    age: 'возраст',
    shipment: 'статус',
  }

  export const getFilterText = (filter) => {
    return filters[filter]
};