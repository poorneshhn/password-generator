import { ASCII_START } from "./constants";

const generateRandomNumber = (startNumber: number, endNumber: number) => {
  let number = Math.floor(
    Math.random() * (endNumber - startNumber + 1) + startNumber
  );
  return number;
};

export default generateRandomNumber;
