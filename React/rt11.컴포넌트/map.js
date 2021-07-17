const arr = [1, 2, 3, 4, 5];

const newarr = arr.map((value, index, array) => {
  return value + 10;
});

console.log(newarr); // [11, 12, 13, 14, 15];

const newli = arr.map((value, index, array) => {
  return `<li key="${index}">${value}</li>`;
});

console.log(newli);
/*
 <li key="0">1</li>
 <li key="1">2</li>
 <li key="2">3</li>
 <li key="3">4</li>
 <li key="4">5</li>
*/