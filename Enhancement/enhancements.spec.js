const { success, fail, repair } = require("./enhancement");
const { sword, shield, dagger, displayName } = require("../Items/items");

describe(" ++++++ the repair function ++++++ ", () => {
  it("it should restored durability to 100", () => {
    const result = repair(sword);
    expect(result.durability).toBe(100);
  });
});

describe(" ++++++ the success function ++++++ ", () => {});

describe(" ++++++ the fail function ++++++ ", () => {});
