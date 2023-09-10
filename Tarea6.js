var arreglo = [3,5,9,13];
let proedio = 0;

let res = arreglo.reduce(
    (sum,item) => sum +item ,
    0
);
console.log(res);

proedio = res / arreglo.length 
console.log(proedio)