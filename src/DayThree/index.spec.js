import { main } from "../DayZero/index.js";

import {getResult} from "../DayOne/partOne.js";


/* describe("Simple test suite", () => {
  it("loads file", () => {
    const load = main();
    expect(load).toEqual(1);
  });
}); */


describe("Part One", () => {
  it("Puzzle 1", () => {
    const puzzle = getResult();
    console.log(puzzle)
    expect(puzzle);
  });
});