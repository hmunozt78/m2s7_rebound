function mayorque (numero1, numero2){
    let numero1int, numero2int;
    numero1int = parseInt(numero1);
    numero2int = parseInt(numero2);

    if (numero1int < numero2int) {
        resultado = "El numero "+numero2+" es mayor que "+numero1;
    } else {
        resultado = "El numero "+numero1+" es mayor que "+numero2;
    }
    
    return resultado;
}