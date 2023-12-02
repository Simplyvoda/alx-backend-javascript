export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let index = 0;
    debugger;
    console.log(idx);
    array[index] = appendString.concat(idx);
    index++;
    console.log(index);
  }

  return array;
}
