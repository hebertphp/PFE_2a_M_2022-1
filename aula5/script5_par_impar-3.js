var num,msg;
num=prompt("Digite um numero inteiro");//"275"
num=parseInt(num);//transf para numero inteiro

msg=(num%2==1)?"ÍMPAR":"PAR";

document.write(num+" - "+msg);



/*
Elaborar um código Javascript para dado um número inteiro, verificar se
o número é PAR ou ÍMPAR. A saída deverá mostrar o número e mostrar
PAR ou ÍMPAR, como mostrado a seguir:
275 - ÍMPAR
28 - PAR
*/