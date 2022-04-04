/*
Solicitar a entrada de 2 números inteiros
a saída deverá mostrar os números digitados e
o resultado de todos os operadores relacionais
*/
var num1,num2,res;
num1=prompt("Digite um número");
num1=parseInt(num1);
num2=prompt("Digite outro número");
num2=parseInt(num2);

res=(num1==num2);
document.write("Nome do aluno, RA: seu RA<br>");
document.write("Números digitados:<br>num1: "+num1+"<br> num2: "+num2+"<hr>");
document.write("Igualdade: "+res+"<br>");
res=(num1===num2);
document.write("Identico: "+res+"<br>");