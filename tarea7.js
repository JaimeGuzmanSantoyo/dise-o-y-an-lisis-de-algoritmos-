//Algoritmo Fibonacci
//---------------------------

const arreglo= [1,1,2,3,5,8,13]; 

if(arreglo.length != null){
    console.log("hay elementos");
}else {
  console.log("no hya elementos en el arreglo ")
}

   
const {[arreglo.length - 2] : penultimo} = arreglo;


const {[arreglo.length - 3] : antepenultimo} = arreglo;

console.log(penultimo)
console.log(antepenultimo )

const fibo = penultimo+antepenultimo
console.log("el resutado de fibo es "+fibo)