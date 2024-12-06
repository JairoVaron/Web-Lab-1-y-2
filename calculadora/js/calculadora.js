let num1 = '';
let num2 = '';
let operacion = '';

//menu
function menu(){
    operacion = prompt(`\nCalculadora Basica
    1 - Suma
    2 - Resta
    3 - Multiplicacion
    4 - Division
    0 - Salir
    Elija una opcion:
    `);

    if(operacion == '1' || operacion == '2' || operacion == '3' || operacion == '4'){
        capurarDatos();  
        menu();
    }
    if(operacion == '0' || operacion == null){
        alert('Fin de la operacion');
    } 
    else{
        alert('Opcion NO valida');
        menu(); 
    }
}

function capurarDatos(){
    let num1, num2;
    while(isNaN(num1)){ //!isNaN pregunta.
        num1 = prompt('Ingrese el primer numero: ');
    }
    while(isNaN(num2)){
        num2 = prompt('Ingrese el segundo numero: ');
    } 
    realizarOperacion(Number(num1), Number(num2), operacion); //todo:Number convierte un String a numerico.
}

function realizarOperacion(num1, num2, operacion){
    if(operacion == '1'){ //suma
        alert(`El resultado de la SUMA de ${num1} + ${num2} es: ${num1 + num2}`);
    }        
    else if(operacion == '2'){ //resta
        alert(`El resultado de la RESTA de ${num1} - ${num2} es: ${num1 - num2}`);
    }  
    else if(operacion == '3'){ //multiplicaion
        alert(`El resultado de la MULTIPLICAION de ${num1} * ${num2} es: ${num1 * num2}`);
    }
    else if(operacion == '4'){ //division
        if(num2 !== 0){
            alert(`El resultado de la DIVISION de ${num1} / ${num2} es: ${num1 / num2}`);
        }
        else 
            alert('Obcion no valida. No se admite division x O');
    }
}  

menu();