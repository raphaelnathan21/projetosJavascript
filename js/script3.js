var numero

numero = prompt("Digite o número e o algaritmo mostrará a sua tabuada: ")

for (contador = 0; contador <= 100; contador = contador +1) {
    var resultado = numero * contador;
    alert(numero + " x " + contador + " = " + resultado);
}