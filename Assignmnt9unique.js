const arr1 = [1, 2, 3];
const arr2 = [100,2,1,10];
const unique = arr1.concat(arr2);

let unique1 = unique.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique1);

