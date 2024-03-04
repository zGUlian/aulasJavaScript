class ContaCliente{

    constructor(numeroConta,saldo,debito,credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito;

    }

    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
        if(saldoAtual >= 0){
            alert("Saldo positivo R$ " + saldoAtual)
        }else{
            alert("Saldo Negativo R$ " + saldoAtual)
        }
    }
}

let numeroConta = prompt("Digite o Numero da Conta do Cliente")
let saldo = parseFloat(prompt("Digite o Saldo do Cliente"))
let debito = parseFloat(prompt("Digite o Debito do Cliente"))
let credito = parseFloat(prompt("Digite o Credito do Cliente"))

let conta = new ContaCliente(numeroConta,saldo,debito,credito)
conta.verificarSaldo();