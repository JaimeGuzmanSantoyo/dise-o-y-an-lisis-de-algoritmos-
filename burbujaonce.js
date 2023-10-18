const a = [10,9,6,3,5,2,1]

function burbuja (a){
for(let i = 0 ; i<a.length - 1 ;i++){
    for(let j= 0 ;j <a.length -1  ;j++) // va comparando en pares 
    if(a[j]>a[j+1]){
            let aux = a[j] // almacenamos al primero elemento en entrar a aux 
            a[j] = a[j+1] 
            a[j+1] = aux; // compara y alamacena 
    }
}
return a 
}
console.log(burbuja(a))