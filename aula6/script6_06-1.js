var emoji=["&#128562","&#9749","&#129409","&#9973","&#9965"];
var i;
document.querySelector("#dv1").innerHTML=emoji+"<br>"+emoji.length;
for (i=0;i<emoji.length;i++){
    document.querySelector("#emoji").innerHTML+="<option>"+emoji[i]+"</option>";
}
// document.querySelector("#emoji").innerHTML="<option>MT</option>";
/*
Desafio 1
Criar os valores para caixa select option, buscando 
os valores contidos no array emoji
*/