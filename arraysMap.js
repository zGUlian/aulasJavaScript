var numeros = [1,2,3,4,5,6,7,8,9,10];

var num = numeros.map(function(valor){
    return valor *2;


});

console.log(num);


var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40}
];


nomes = funcionarios.map(pessoa => pessoa.nome);

console.log(nomes);

idades = funcionarios.map(idade => idade.idade);

console.log(idades);

var total = 0;

for(var i = 0; i < numeros.length; i++){
    total += numeros[i];

}

console.log(total);

var tot = numeros.reduce(function(total,numero){
    return total + numero;

}, 0);

console.log(tot);

