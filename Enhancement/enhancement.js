module.exports = {
  fail
};

function fail(item) {
  // -[x] If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
  if (item.enhancement < 15 && item.durability < 25) {
    return { ...item };
  }
  // -[x] The durability of the item is decreased by 5 if the item's `enhancement` is between 0 and 14.
  // - The durability of the item is decreased by 10 if the item's `enhancement` is greater than 14.
  // -
  const durability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  // -[x] If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
  // -[x] The name is updated to reflect the new enhancement level if it was decreased.
  const enhancement =
    item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;

  return { ...item, durability, enhancement };
}
