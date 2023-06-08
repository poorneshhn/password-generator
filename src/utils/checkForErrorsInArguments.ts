import throwError from "./throwError";

const checkForErrorsInArguments = (
  length?: number,
  startsWith?: string,
  endsWith?: string
) => {
  if (length) {
    if (startsWith && startsWith.length > length) {
      throwError("startsWith length can not be greater than password length");
    }
    if (endsWith && endsWith.length > length) {
      throwError("endsWith length can not be greater than password length");
    }

    if (startsWith && endsWith) {
      if (startsWith.length + endsWith.length > length) {
        throwError(
          "startsWith and endsWith combined length can not be greater than password length"
        );
      }
    }
  }
};

export default checkForErrorsInArguments;
