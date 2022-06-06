function boas_vindas(nome) {
    const saida=document.querySelector("#saida");
    saida.innerHTML="Seja bem vindo <b>"+nome+"</b>!";
}
boas_vindas("Manuele");