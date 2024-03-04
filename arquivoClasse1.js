class DispositivoEletronico{
    constructor(nome){
       this.nome = nome;
       this.ligado = false; 
    }
    ligar(){
        if(this.ligado){
            console.log("Já Está Ligado")
            return;
        }
        this.ligado = true;
    }
}

class SmartPhone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}


var s1 = new SmartPhone("Sansung","Preto","Galaxy A71");

console.log(s1);
s1.ligar();
console.log(s1);