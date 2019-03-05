const { fail } = require("./enhancement");

describe("enhacer", () => {
  describe("fail ()", () => {
    //-[x] The durability of the item is decreased by 5 if the item's `enhancement` is between 0 and 14.
    it(` The durability of the item is decreased by 5 if the item's "enhancement" is between 0 and 14.`, () => {
      //arrange (setup)
      const item = {
        enhancement: 14,
        durability: 85
      };
      const actual = fail(item);
      expect(actual.durability).toBe(80);
    });
    // - The durability of the item is decreased by 10 if the item's `enhancement` is greater than 14.
    it(`The durability of the item is decreased by 10 if the item's enhancement' is greater than 14`, () => {
      expect(
        fail({
          enhancement: 15,
          durability: 85
        }).durability
      ).toBe(75);
    });
    // -[x] If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
    it(`If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).`, () => {
      const item = {
        enhancement: 17
      };
      const actual = fail(item);
      expect(actual.enhancement).toBe(16);
    });
    // -[x] The name is updated to reflect the new enhancement level if it was decreased.

    // -[x] If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
    it(`If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10).`, () => {
      const item = {
        enhancement: 17,
        durability: 9
      };
      const actual = fail(item);
      expect(actual).toEqual(actual);
    });
  });
});
