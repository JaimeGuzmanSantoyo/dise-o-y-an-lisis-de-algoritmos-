function ValorMinimo(arreglo){
let minimo = arreglo[0]
for( let i =0;i<arreglo.length;i++){
if (minimo > arreglo[i]){
minimo =  arreglo[i]

}
}
return [minimo]
}
ValorMinimo([20,0,5,30,2])


