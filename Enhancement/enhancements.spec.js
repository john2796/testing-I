/* eslint-disable max-len */
const { fail, repair, success } = require('./enhancement');

describe('enhacer', () => {
  describe('----------------  fail() ----------------', () => {
    // -[x] The durability of the item is decreased by 5 if the item's `enhancement` is between 0 and 14.
    it(' The durability of the item is decreased by 5 if the item\'s "enhancement" is between 0 and 14.', () => {
      // arrange (setup)
      const item = {
        enhancement: 14,
        durability: 85,
      };
      const result = fail(item);
      expect(result.durability).toBe(80);
    });
    // - The durability of the item is decreased   by 10 if the item's `enhancement` is greater than 14.
    it("The durability of the item is decreased by 10 if the item's enhancement' is greater than 14", () => {
      expect(
        fail({
          enhancement: 15,
          durability: 85,
        }).durability,
      ).toBe(75);
    });
    // -[x] If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
    it("If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).", () => {
      const item = {
        enhancement: 17,
      };
      const result = fail(item);
      expect(result.enhancement).toBe(16);
    });
    // -[x] The name is updated to reflect the new enhancement level if it was decreased.

    // -[x] If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
    it("If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10).", () => {
      const item = {
        enhancement: 17,
        durability: 9,
      };
      const result = fail(item);
      expect(result).toEqual(result);
    });
  });

  describe('---------------- repair() ----------------', () => {
    // -[x] a `repair(item)` method that accepts an `item` object and returns a new [item] with the durability restored to 100`.
    it('repair(item) method that accepts an [item] object and returns a new [item] with the durability restored to 100', () => {
      const item = {
        durability: 40,
      };

      const result = repair(item);
      expect(result.durability).toBe(100);
    });
  });

  describe('------------------- success() ------------------------', () => {
    //     -[x] The enhancement level of an item starts at 0.
    it('The enhancement level of an item starts at 0', () => {
      const item = {
        enhancement: 0,
        durability: 100,
      };
      const result = success(item);

      expect(result.enhancement).toBe(0);
    });
    // -[x] The maximum enhancement possible is PEN.
    it('The maximum enhancement possible is PEN.[20]', () => {
      const item = {
        durability: 100,
      };
      const result = success(item);
      expect(result.durability).toBe(100);
    });
    // -[] Enhancing an armor up to 5 cannot fail.
    it('Enhancing an armor up to 5 cannot fail', () => {
      const item = {
        enhancement: 5,
      };
      const result = success(item);
      expect(result.enhancement).toBe(5);
    });
    // -[] Enhancing a weapon up to 7 cannot fail.
    it('Enhancing a weapon up to 7 cannot fail.', () => {
      const item = {
        enhancement: 7,
      };
      const result = success(item);
      expect(result.enhancement).toBe(7);
    });
    // -[] Enhancement level is displayed as a strin g with a plus sign ( + ) before the number for levels 1 to 15.
    it('Enhancement level is displayed as a strin g with a plus sign ( + ) before the number for levels 1 to 15.', () => {
      const item = {
        enhancement: 15,
      };
      const result = success(item);
      expect(result.enhancement).toBeLessThanOrEqual(result.enhancement, 15);
    });
    // -[] Enhancement level of 0 is not displayed.

    it('Enhancement level of 0 is not displayed', () => {
      const item = {
        enhancement: 0,
      };
      const result = success(item);
      expect(result.enhancement).toBe(0);
    });
    // -[] when an item is enhanced, the `name` should be modified to include the enhancement level between square brackets before the item's `name`. Example: the new name of a "Iron Sword" enhanced to 7 would be _"[+7] Iron Sword"_, at DUO would be _"[DUO] Iron Sword"_.
    it('hen an item is enhanced, the name should be modified to include the enhancement level between square brackets before the item\'s name', () => {
      const item = {
        name: '[+7] Iron Sword',
      };
      const result = success(item);
      expect(result.name).toBe(result.name);
    });
    // -[] From +0 to +15 the enhancement is displayed using _Arabic Numerals_.

    it('From +0 to +15 the enhancement is displayed using _Arabic Numerals_.', () => {
      const item = {
        enhancement: '$[+1]',
      };
      const result = success(item);
      expect(result.enhancement).toBe('$[+1]');
    });
    // -[] After +15 the display for the enhancing level follows the table below:

    it('The maximum enhancement possible is PEN.[20]', () => {
      const item = {
        durability: 100,
      };
      const result = success(item);
      expect(result.durability).toBe(100);
    });
  });
});
