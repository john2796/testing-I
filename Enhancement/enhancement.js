/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */

const enhanceLevels = {
  1: '[+1]',
  2: '[+2]',
  3: '[+3]',
  4: '[+4]',
  5: '[+5]',
  6: '[+6]',
  7: '[+7]',
  8: '[+8]',
  9: '[+9]',
  10: '[+10]',
  11: '[+11]',
  12: '[+12]',
  13: '[+13]',
  14: '[+14]',
  15: '[+15]',
  16: '[PRI]',
  17: '[DUO]',
  18: '[TRI]',
  19: '[TET]',
  20: '[PEN]',
};
function fail(item) {
  if (item.enhancement < 15 && item.durability < 25) {
    return { ...item };
  }
  const durability = item.enhancement < 15 ? item.durability - 5 : item.durability - 10;

  const enhancement = item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;


  return { ...item, durability, enhancement };
}

function repair(item) {
  const newItem = Object.create(item);

  newItem.durability = 100;
  return { ...item };
}

function success(item) {
  //`name`, `type`, `durability` and `enhancement
  // -[x] The enhancement level of an item starts at 0.
  // -[x] The maximum enhancement possible is PEN.
  // -[] Enhancing an armor up to 5 cannot fail.
  // -[] Enhancing a weapon up to 7 cannot fail.
  // -[] Enhancement level is displayed as a strin g with a plus sign ( + ) before the number for levels 1 to 15.
  // -[] Enhancement level of 0 is not displayed.
  // -[] when an item is enhanced, the `name` should be modified to include the enhancement level between square brackets before the item's `name`. Example: the new name of a "Iron Sword" enhanced to 7 would be _"[+7] Iron Sword"_, at DUO would be _"[DUO] Iron Sword"_.
  // -[] From +0 to +15 the enhancement is displayed using _Arabic Numerals_.
  // -[] After +15 the display for the enhancing level follows the table below:

  const enhancement = item.enhancement < 20 ? 20 : item.enhancement || 0;
  const type = item.type ? 'weapon' : 'armor ';
  const durability = item.durability > 100 ? 100 : item.durability;
  const name = `${enhanceLevels[item.enhancement]} ${item.name}`;

  return {
    ...item,
    name,
    type,
    durability,
    enhancement,

  };
}

module.exports = {
  fail,
  repair,
  success,
};
