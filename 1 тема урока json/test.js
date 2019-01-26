'use strict';

const name = 'Olga';
const surname = 'Grigoryan';

// Name is Liza and surname is Grigoryan
// console.log(`Name is ${name} and surname is ${surname}`);

// const cat = {
//     name: 'Alice',
//     color: 'black'
// };

const string = JSON.stringify(cat);
console.log(string);


const catJson = '{"name":"Alice","color":"black"}';
console.log(`Cat name before parsing: ${catJson.name}`);

const cat = JSON.parse(catJson);
console.log(cat);
console.log(`Name after parsing: ${cat.name}`);
console.log(`Color after parsing: ${cat.color}`);

