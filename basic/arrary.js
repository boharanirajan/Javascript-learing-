const myArr=[0,1,2,3,4,5,6,7,8];
const name=["nirajan","ram","risk"];

// // array methods
// myArr.push(10);
// console.log(myArr);
// myArr.pop();

// myArr.unshift(11);
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
//console.log(myArr.indexOf(7));

// const newArr=myArr.join();
// console.log(myArr);
// console.log(newArr);
// slice splice

// const myn1=myArr.slice(1,3);
// console.log(myn1);
// console.log("B",myArr);

// const myn2=myArr.splice(1,3);
// console.log(myn2);
// console.log("c",myArr);

const marvel_heros=["flash","batman",'rajesh'];
const heros=["super man",'xyz'];

// const newArr1=marvel_heros.concat(heros);
// console.log(newArr1);
// const all_new_heros=[...marvel_heros,...heros];
// console.log(all_new_heros);

// const another_array=[1,2,3,[4,5,6],7,[6,7,4,5]];
// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("nirajan"));

console.log(Array.from("nirajan"));
console.log(Array.from({name:"nirajan"})); // intersting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));