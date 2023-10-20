function Descomponer (numero ){
   
    if(numero < 0 ){

       return 0 
    }else{
    console.log(numero)
  
    
    Descomponer(numero -1)
    }

}
(Descomponer(20))