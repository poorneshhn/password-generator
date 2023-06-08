import generateRandomNumber from "../utils/generateRandomNumber";
import getCharFromAscii from "../utils/getCharFromAscii";
import { ASCII_START, ASCII_END } from "../utils/constants";
import checkForErrorsInArguments from "../utils/checkForErrorsInArguments";

const generatePassword = (
  passwordLength?: number,
  startsWith?: string,
  endsWith?: string
) => {
  checkForErrorsInArguments(passwordLength, startsWith, endsWith);
  if (
    !(
      passwordLength &&
      typeof passwordLength === "number" &&
      !isNaN(passwordLength)
    )
  ) {
    passwordLength = 10;
  }
  let requiredPasswordLength = passwordLength;
  let password = "";
  if (startsWith) {
    password += startsWith;
  }
  passwordLength = passwordLength - password.length;

  if (passwordLength > 0) {
    let asciiNumbersArray = [];
    for (let i = 0; i < passwordLength; i++) {
      asciiNumbersArray.push(generateRandomNumber(ASCII_START, ASCII_END));
    }
    password += getCharFromAscii(asciiNumbersArray);
  }

  if (endsWith) {
    password = password.slice(0, requiredPasswordLength - endsWith.length);
    password += endsWith;
  }
  return password;
};

export default generatePassword;
