# mergeArrays
сортування результату у порядку зростання
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const mergeArrays = (list1, list2, order) => {
  const compare = (x, y) => (order === 'asc' ? x - y : y - x);
  return [...list1, ...list2].sort(compare);
};

rl.question('Введіть перший список: ', (input1) => {
  rl.question('Введіть другий список: ', (input2) => {
    rl.question('Сортування (asc/desc): ', (order) => {
      if (!['asc', 'desc'].includes(order)) return console.log('Невірний напрям!') || rl.close();
      console.log('Результат:', mergeArrays(input1.split(',').map(Number), input2.split(',').map(Number), order));
      rl.close();
    });
  });
});
