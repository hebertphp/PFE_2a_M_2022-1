var num=[10,20,30,40,50,1,2,4,5,6,7,8,6,5,4,3,3,1,12,3,41,2022];
var tam;
tam=num.length;
document.querySelector("#dv1").innerHTML="var num possui "+tam+" valores<hr>"+"Todos os valores da var num: "+num+"<hr>";
document.querySelector(".teste").innerHTML="Valor da primeira posição de num: "+num[0]+"<hr>"+"Valor da última posição de num: "+num[num.length-1]+"<hr>";
document.querySelector("h2").style.backgroundColor="red";
/*
document.write("var num possui "+tam+" valores<hr>");
document.write("Todos os valores da var num: "+num+"<hr>");
document.write("Valor da primeira posição de num: "+num[0]+"<hr>");
document.write("Valor da última posição de num: "+num[tam-1]+"<hr>");
mudar de document.write para querySelector
dois document.write em cada div
*/