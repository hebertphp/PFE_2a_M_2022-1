const saida = document.querySelector("#saida");
var carro = {
    nome: "Fusca",
    cor: "Azul",
    ano: 1974,
    dados: function(){
        return this.nome + ", cor " + this.cor + ", ano " +this.ano;
    }

};

saida.innerHTML = `Nome = ${carro.nome}<br>`;
saida.innerHTML += `Cor = ${carro.cor}<br>`;
saida.innerHTML += `Ano = ${carro.ano}<br>`;
saida.innerHTML += carro.dados();