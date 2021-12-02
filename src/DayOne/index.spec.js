import { main } from "../DayZero";

describe("Simple test suite", () => {
  it("loads file", () => {
    const load = main();
    expect(load).toEqual(1);
  });
});
