// Função Arrow
const mensagem = (nome) => {
    console.log(`Olá, ${nome}!`);

};

mensagem("Marcelo"); // Outputs: Olá, MArcelo!

function multiplicar(x,y){
    return x*y

}

var a = multiplicar(4,2);

console.log(a);

function somaValores (a,b = 2, c = 6){
    var total = a + b + c
    return total;
}
var f = somaValores(8,4,5);
console.log(f);


var infoCal = function(a,b,c){
    return a + b + c;
}

//Function Anonima
console.log(infoCal(10,5,7));

const soma = (num1,num2) => {
    return num1+num2;
}

console.log(soma(3,7));

//Array c/ Map c/ Arrow Function
const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num*num)
console.log(valores);

var listaProdutos = ["geladeira","fogão","air fryer"];

var listaEmMaiusculo = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
};

console.log(listaEmMaiusculo);