const sword = {
  name: "crystalys",
  type: "weapon",
  durability: 60,
  enhancement: "+15"
};
const dagger = {
  name: "Echo Sabre",
  type: "weapon",
  durability: 60,
  enhancement: "+15"
};
const shield = {
  name: "stout shield",
  type: "shield",
  durability: 80,
  enhancement: "+10"
};
const displayName = item => {
  if (item.enhancement === 0) {
    return item.name;
  } else if (item.enhancement <= 15) {
    return `[${item.enhancement}] ${item.name}`;
  } else if (item.enhancement === 16) {
    reutrn`[PRI] ${item.name}`;
  } else if (item.enhancement === 17) {
    reutrn`[DUO] ${item.name}`;
  } else if (item.enhancement === 18) {
    reutrn`[TRI] ${item.name}`;
  } else if (item.enhancement === 19) {
    reutrn`[TET] ${item.name}`;
  } else if (item.enhancement === 20) {
    reutrn`[PEN] ${item.name}`;
  }
};
module.exports = {
  sword,
  shield,
  dagger,
  displayName
};
