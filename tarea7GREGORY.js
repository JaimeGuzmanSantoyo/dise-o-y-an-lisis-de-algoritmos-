function MetodoGregory(iteraciones) {
    let PI = 0;
    for (let i = 0; i < iteraciones; i++) {
        let denominador = 2 * i + 1;
        if (i % 2 === 0) {
         
            PI += 1 / denominador;
        } else {
         
            PI -= 1 / denominador;
        }
    }
    return 4 * PI;
}


const numeroDeIteraciones = 100; 
const ValorReal = MetodoGregory(numeroDeIteraciones);
console.log(`el valor obtenido en numero de iteraciones :${numeroDeIteraciones} es un valor de pi de : ${ValorReal}`)