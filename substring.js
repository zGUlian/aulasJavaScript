var s = "JavaScript e Python";

var pos1 = s.indexOf("Python");

var novaString = s.substring(13, 19);

console.log(novaString);


var frase = "Olá Mundo";
if (frase.startsWith("Olá")) {
    let sub = frase.substring(4);
    let novaString = sub.replace("Mundo", "Pessoal");
    let novaStringMaiuscula = novaString.toUpperCase();
    console.log(novaStringMaiuscula);
};



const mensagem = (nome) => {
    console.log(`Olá, ${nome}!`);

};

mensagem("Marcelo"); // Outputs: Olá, MArcelo!