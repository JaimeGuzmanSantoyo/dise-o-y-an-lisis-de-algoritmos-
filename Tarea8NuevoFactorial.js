function  FactorialRecursividad(n){
    if(n< 2 ){
        return 1;
    }else
    return n * FactorialRecursividad(n-1)
}
console.log("el valor de recursividad para el numero 1 es :"+FactorialRecursividad(1))