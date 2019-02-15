const s = sum(toIntegers(process.argv.splice(2)))
console.log(s);

function toIntegers(array) {
  return array.map(x => Number(x));
}

function sum(array) {
  const reducer = (acc, currentVal) => acc + currentVal;
  return array.reduce(reducer);
}
