/* Funções em Javascript 

Existem 2 tipos de funções:
- Reservadas pela linguagem, é necessário apenas chamar a função para que
seja executada
alert()
console.log()
prompt()

- Personalizadas
Criadas pelo usuário, é necessário que sejam construídas utilizando a estrutura
funcion nomeDaFuncao() {

}
e em seguidas chamadas para serem executadas

Em cada função há a presença do parênteses () que pode estar vazio ou não.
Os parênteses recebe um argumento. Quando este argumento é uma variável, dizemos que ele
recebe um parâmetro.
*/

//Função personalizada sem argumento, já o comando
//console.log ("Olá mundo!") possui um argumento do tipo string
function saudacao() {
    console.log("Olá mundo!");
}

saudacao();

var nome
function despedida(nome) {
    console.log("Tchau, " + nome);
}

despedida("João");

function soma(a, b) {
    return a + b;
}

var resultado = soma(5, 3);
console.log(resultado);