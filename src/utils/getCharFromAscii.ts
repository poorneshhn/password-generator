const getCharFromAscii = (asciiArray: number[]) => {
  let str = "";
  for (let ele of asciiArray) {
    str += String.fromCharCode(ele);
  }
  return str;
};

export default getCharFromAscii;
