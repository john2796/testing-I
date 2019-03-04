const { displayName } = require("../Items/items");

module.exports = {
  success,
  fail,
  repair
};

function repair(item) {
  const newItem = {};
  newItem.name = item.name;
  newItem.type = item.type;
  newItem.enhancement = item.enhancement;
  newItem.durability = 100;

  return newItem;
}

function fail(item) {
  if (item.enhancement <= 14) {
    return { ...item, enhancement: item.enhancement - 5 };
  } else if (item.durability <= 14) {
    return { ...item, durability: item.durability - 10 };
  } else if (item.enhancement >= 16) {
    item.name = item.name
      .split("")
      .splice(6)
      .join("");

    let name = `[${item.enhancement - 1}] ${item.name}`;
    console.log(name);
    return {
      ...item,
      enhancement: item.enhancement - 1,
      name
    };
  }
}

function success(item) {}
