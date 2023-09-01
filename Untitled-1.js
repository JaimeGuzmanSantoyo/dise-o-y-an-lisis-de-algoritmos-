function ValorMinimo(arreglo){
let minimo = arreglo[0]
let maximoValor = arreglo[0]
for( let i =0;i<arreglo.length;i++){ //para ir incrementando la variable i hasta el tamaño del array
if (minimo > arreglo[i]){
minimo =  arreglo[i]

}
if ( maximoValor< arreglo[i]){
    maximoValor =  arreglo[i]
}
}
return [minimo,maximoValor] // imorimir valores minimos y maximos

}

ValorMinimo([20,0,5,30,2])
