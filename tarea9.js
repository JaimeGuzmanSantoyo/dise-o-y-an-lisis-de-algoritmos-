function contarAcentos(frase) {
    
    let Acentos = 'áéíóúÁÉÍÓÚ';
    let contarAcentos = 0;

    for(let i = 0; i < frase.length; ++i) {
        if (Acentos.indexOf(frase[i]) !== -1) { //lo puse para que solo evalue las letras que estasn en el texto
            contarAcentos++;
        }
    }

    return contarAcentos;
}


    console.log(contarAcentos('La profesora de Geografía se enfermó y hoy no vendrá a trabajar.')); // un acentos




    console.log(contarAcentos('El poema está plagado de metáforas y sinécdoques.')); // un acento

    console.log(contarAcentos('La decisión del presidente tendrá un alto costo político')); //3