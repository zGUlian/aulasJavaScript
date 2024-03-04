var nome = "Marcelo da Silva";

var x = nome.length;
console.log(x);

resultado = x > 15 ? "Obrigado" : "Por favor preencha o seu nome completo";

console.log(resultado);

//Metodo UpperCase Deiaxr letras maiusculas
var res = nome.toLocaleUpperCase();
console.log(res);

//Metodo Index
var jogo = "Barcelona vs Real melhor time";
var posicicao = jogo.indexOf("Real");
console.log(posicicao);

//Meteodo Slice com String
var cortado = jogo.slice(0,9);
console.log(cortado);

// Metodo Includes
var val = jogo.includes("Real");
console.log(val);

// Metodo Concat
var str1 = "Hello";
var str2 = " Turma";

var str3 = str1.concat(str2);
console.log(str3);


//Metodo Trim Tirar os Espaços em branco
var frase = "        Olá vc esta aprendendo javaScript";
console.log(frase.trim());


//Criar Arrays com o Metodo Split usando algo do string para poder separar 
var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");
console.log(arr);