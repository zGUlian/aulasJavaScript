var valores = [8,1,7,2,9];

console.log(valores[3]);


console.log("Array invertido: " + valores.reverse());


for (var pos = 0 ; pos < valores.length; pos++){

    console.log("Posição: " + pos + " Valor: " + valores[pos]);

}



var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BWM","Yamaha","Honda");

var soma = 0;

for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];

}


var media = soma/valores.length;

console.log(media);



var arr1 = [1,2,3,4,5,6];


console.log(arr1.join('|'));


var retirado = arr1.shift();

console.log(retirado);


console.log(arr1);


console.log("Posição do Numero 3: " + arr1.indexOf(3));



arr1.push(7);

console.log(arr1);


arr1.pop();

console.log(arr1);


var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,2);

console.log(arr2);

var nomes = ["Maria","João","Lucas","Pedro"];
var novos = nomes.splice(1,2,"Luiz","Ronaldo");
console.log(nomes);

var pais = ["Brasil","Argentina","Colombia"];

pais.unshift("Uruguai");

console.log(pais);


var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var gerente = ["Davi","Manuella"];
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);


var empresa = pessoa.concat(gerente);

console.log(empresa);


var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var trimestre1 = meses.slice(0,3);
var trimestre2 = meses.slice(3,6);
var trimestre3 = meses.slice(6,9);
var trimestre4 = meses.slice(9,12);
 
console.log(trimestre1);
console.log(trimestre2);
console.log(trimestre3);
console.log(trimestre4);