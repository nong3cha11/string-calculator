function add(numbers: string) {
//   const split = numbers.split(',');
//   let value = 0;
//   for (let i = 0; i < split.length; i++) {
//     value += +split[i] | 0;
//   }
  return numbers.slice(2).match(/.*?(?=\s+\n)/gs);
//   return value;
}

console.log(add('//[delimiter]' + '/' + 'n'));
