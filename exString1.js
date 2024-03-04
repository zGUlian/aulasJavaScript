/*Prática

Olá, aluno! Neste exercício, vamos trabalhar com um código em JavaScript que lida com uma lista de nomes. Nosso objetivo é aplicar uma transformação específica nos nomes, convertendo-os para letras maiúsculas, mas apenas se tiverem um tamanho menor que 5 caracteres. Ou seja, nomes curtos serão modificados, enquanto nomes mais longos permanecerão inalterados.

Para resolver esse problema, podemos utilizar alguns conceitos fundamentais da linguagem JavaScript, como arrays, iteração e manipulação de strings. Vamos usar o método map() para iterar sobre cada elemento da lista de nomes e, em seguida, vamos verificar o tamanho de cada nome com a propriedade length. Se o nome tiver menos de 5 caracteres, aplicaremos o método toUpperCase() para convertê-lo para letras maiúsculas. Caso contrário, manteremos o nome original.

É importante lembrar que, para implementar essa solução, é necessário ter um conhecimento básico de JavaScript e de como trabalhar com arrays e strings. Agora, vamos colocar em prática esses conceitos e resolver o problema de converter nomes para letras maiúsculas com base no tamanho do nome. Mãos à obra! */

//Resolução:

//Array com nomes das pessoas

let nomes = ["João","Maria","Carlos","Ana","Pedro"];

//Alterar sobre cada nome e converte-lo para letras maiusculas

let nomeMaiusculo = nomes.map(nome => nome.toUpperCase());


//Exibir nomes em letras maiusculas

console.log(nomeMaiusculo);