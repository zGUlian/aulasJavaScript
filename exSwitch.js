const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escolha sua bebida: café, leite ou chá? ', (escolhaBebida) => {
  let valor;

  switch (escolhaBebida.toLowerCase()) {
    case 'café':
      valor = 2.50;
      console.log(`Você escolheu café. Valor a ser pago: R$ ${valor.toFixed(2)}`);
      break;
    case 'leite':
      valor = 3.00;
      console.log(`Você escolheu leite. Valor a ser pago: R$ ${valor.toFixed(2)}`);
      break;
    case 'chá':
      valor = 2.00;
      console.log(`Você escolheu chá. Valor a ser pago: R$ ${valor.toFixed(2)}`);
      break;
    default:
      console.log("Opção inválida. Escolha entre café, leite ou chá.");
  }

  rl.close();
});