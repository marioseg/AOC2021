import { readFileSync } from "fs";
import { URL } from "url";
const readInput = (file) => {
  const path = new URL(`./${file}`, import.meta.url).pathname;
  return readFileSync(path, "utf8");
};

export const main = () => {
  const data = readInput("input.txt");
  return 1;
};
