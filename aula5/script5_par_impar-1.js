var num,res;
num=prompt("Digite um numero inteiro");//"275"
num=parseInt(num);//transf para numero inteiro

res=num%2;

//document.write(num+" - "+res);

if(res==1){
    document.write(num+" - ímpar");
}
else{
    document.write(num+" - par");
}


/*
Elaborar um código Javascript para dado um número inteiro, verificar se
o número é PAR ou ÍMPAR. A saída deverá mostrar o número e mostrar
PAR ou ÍMPAR, como mostrado a seguir:
275 - ÍMPAR
28 - PAR
*/