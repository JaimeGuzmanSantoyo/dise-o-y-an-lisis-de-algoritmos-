function FibonaccioXRecursividad(n){
    if (n <2){
        return n;
    }
    else 
    return FibonaccioXRecursividad(n-1)+FibonaccioXRecursividad(n-2)
    
}
console.log("el valor de Fibonacci para 10 es : "+ FibonaccioXRecursividad(10))