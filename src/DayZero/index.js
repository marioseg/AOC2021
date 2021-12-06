import {readFileSync}from 'fs';
import { URL } from "url";
const readInput = (file) => {
  const path = new URL(`${file}`, import.meta.url);
  return readFileSync(path, "utf8");
};

export const main = () => {
  const data = readInput("input.txt");
  return data;
};

export const getDataDayThree = () => {
  const data = readInput("dayThreeInput.txt")
  return data;
}