var nota=[10,8.5,7.75,9.5];
var num=[];
num[0]=120;
num[1]=200;
num[2]=2020;
var nome=new Array("Jose","Paula","Carla");
nota=[];//apagou o conteúdo do array
document.querySelector("#dv1").innerHTML=nota+"<br>"+num;
document.querySelector(".teste").innerHTML=nome;
document.querySelector("h1").innerHTML=nome[1];
/*
a saída da var nota e num -> #dv1
a saída de nome -> .teste
Mudar o conteúdo da tag H1 para -> Paula
*/


// document.write(nota+"<hr>");
// document.write(num+"<hr>");
// document.write(nome+"<hr>");