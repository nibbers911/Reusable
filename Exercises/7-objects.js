'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'Viacheslav' };
  let obj2 = { name: 'Viacheslav' };

  obj1.name = 'Trubnikov';
  obj2.name = 'Trubnikov';

  // const фіксує посилання, а не вміст: поля міняти можна
  obj2 = { name: 'Dmytro' }; // let дозволяє змінити посилання

  return { obj1, obj2 };
};

module.exports = { fn };
