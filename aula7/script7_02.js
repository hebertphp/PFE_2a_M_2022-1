function boas_vindas(nome) {
    const saida=document.querySelector("#saida");
    saida.innerHTML+="Seja bem vindo(a) <b>"+nome+"</b>!<br>";
}// criação da função

function boas_vindas_input(){
    const outrasaida=document.querySelector("#outrasaida");
    const login=document.querySelector("#login");
    const senha=document.querySelector("#senha");
    outrasaida.innerHTML+="Seja bem vindo(a) <b>"+login.value+"</b>!<br>Senha: "+senha.value+"<br>";
}// criação da função

boas_vindas("Manuele");//chamada da função, execução da função
boas_vindas("Anacleto");