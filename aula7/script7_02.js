const saida=document.querySelector("#saida");
const outrasaida=document.querySelector("#outrasaida");
const login=document.querySelector("#login");
const senha=document.querySelector("#senha");

function boas_vindas(nome) {
     saida.innerHTML+="Seja bem vindo(a) <b>"+nome+"</b>!<br>";
}// criação da função

function boas_vindas_input(){
     outrasaida.innerHTML+="Seja bem vindo(a) <b>"+login.value+"</b>!<br>Senha: "+senha.value+"<br>";
}// criação da função
function limpar(){
    login.value="";
    senha.value="";
    outrasaida.innerHTML="";

}
boas_vindas("Manuele");//chamada da função, execução da função
boas_vindas("Anacleto");