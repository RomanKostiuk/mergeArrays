# mergeArrays
сортування результату у порядку зростання
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const mergeAndSortAscending = (list1, list2) => {
  return [...list1, ...list2].sort((x, y) => x - y);
};

rl.question('5,2,9: ', (input1) => {
  rl.question('3,8,1: ', (input2) => {
    console.log(
      '([1, 2, 3, 5, 8, 9]):',
      mergeAndSortAscending(input1.split(',').map(Number), input2.split(',').map(Number))
    );
    rl.close();
  });
});
