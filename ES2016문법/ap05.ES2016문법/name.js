let name = ["경포호", "화진포", "송지호", "청초호"];
let [first, ...rest] = name; // ...rest : rest 연산자
console.log(first); // "경포호"
console.log(rest) // ["화진포", "송지호", "청초호"]

let [city1, ...cityrest] = [...east, ...west];
// ...cityrest: rest 연산자  , [...east, ...west] : spread 연산자
console.log(cityrest); // ["K", "T", "N", "C", "G"]