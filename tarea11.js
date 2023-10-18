//selectionSort 
 const a = [6,3,8,1,2,10]

 function Seleccion (a){
for(let j = 0 ; j<a.length ;j++){ // j recorre el arreglo 
    let medio = j
    for(let i = j ;i<a.length;i++ ){ // si i es menor que medio para este punto medio es = j ,si i < a[medio] ,significa que va ir comparando 
    if(a[i]<a[medio]){
            medio = i 

    }
    }
    let aux = a[j]      // en este caso yo lo veo de la siguiente forma // aux priemro va a alamacenar el estado inicia
     a[j] = a[medio]    // despues anotamos los estados de transicio0n de a[j] = a [medio]
     a[medio] = aux;  // por ultimo anotamos el ultimo estado en guardar dentro de aux
}
return a;
 }
 console.log(Seleccion(a)) // que imprima el metodo 