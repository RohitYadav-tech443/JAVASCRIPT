// const myArr=[1,2,3,4,5];
// console.log(myArr[0]); 
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();
// console.log(myArr);

// const newArr=myArr.join();
// console.log(myArr);
// console.log(newArr);

// console.log("A",myArr);

// const myn1=myArr.slice(1,3);
// console.log(myn1);
// console.log("B",myArr);

// const myn2=myArr.splice(1,3);
// console.log(myn2);
// console.log("C",myArr);

// lec 15
const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
marvel_heroes.pop();
console.log(marvel_heroes.concat(dc_heroes));

const all_new_heroes=[...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(another_array.flat(Infinity)); 

// interesting
console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name : "hitesh"}));

 

