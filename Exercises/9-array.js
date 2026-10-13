'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Snorter', phone: '+380677770000' },
  { name: 'Eater', phone: '+380660006666' },
  { name: 'Digester', phone: '+380505005500' },
];

const findPhoneByName = name => {
  for (const r of phonebook) if (r.name === name) return r.phone;
};

module.exports = { phonebook, findPhoneByName };
