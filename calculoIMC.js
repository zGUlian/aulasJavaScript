function criarFuncionario(nome, sobrenome, a, p) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        altura: a,
        peso: p,
        calculoImc: function() {
            const indice = (this.peso / (this.altura ** 2)).toFixed(1);
            if (indice < 18.5) {
                console.log("Abaixo do Peso");
            } else if (indice >= 18.5 && indice < 24.9) {
                console.log("Peso Ideal");
            } else if (indice >= 25 && indice < 29.9) {
                console.log("Acima do Peso");
            } else if (indice >= 30 && indice < 34.9) {
                console.log("Obesidade 1");
            } else if (indice >= 35 && indice < 39.9) {
                console.log("Obesidade 2");
            } else if (indice >= 40) {
                console.log("Obesidade 3");
            }
        }
    };
}

// Exemplo de uso
const funcionario = criarFuncionario("Gabriel", "Ulian", 1.80, 106);
funcionario.calculoImc(); // Chamando o método para calcular o IMC do funcionário
