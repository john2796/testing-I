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
  const durability = item.durability < 100 ? 100 : item.durability;
  return { ...item, durability };
}

function dynamicLevels(obj, val) {
  if (typeof val === 'number') {
    const arr = Object.keys(obj);
    return arr.map((num) => {
      if (Number(num) === val) {
        return obj[num];
      }
      return null;
    });
  }
  return null;
}

function success(item) {
  let { enhancement } = item;
  const enhance = enhancement < 0 ? enhancement += 1 : item.enhancement;
  const type = item.type ? 'weapon' : 'armor ';
  const durability = item.durability > 100 || item.durability < 0
    ? 100
    : item.durability;
  const name = `${dynamicLevels(enhanceLevels, enhancement)} ${item.name}`;
  return {
    ...item,
    name,
    type,
    durability,
    enhancement: enhance,
  };
}

module.exports = {
  fail,
  repair,
  success,
};

