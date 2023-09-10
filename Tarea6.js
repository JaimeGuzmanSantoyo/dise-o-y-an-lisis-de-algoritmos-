var arreglo = [3,5,9,13];
let proedio = 0;
let resultado = 0;


for ( let i = 0 ;i < array.length ;i++) {
    if (resultado< arreglo[i]){
        resultado =  arreglo[i]
        resultado = arreglo.reduce(
    (sum,item) => sum +item ,
    0
);
        }
    
}
 /*res = arreglo.reduce(
    (sum,item) => sum +item ,
    0
);*/
console.log(resultado);

proedio = resultado / arreglo.length 
console.log(proedio)